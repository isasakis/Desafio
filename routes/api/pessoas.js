const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Pessoa = require('../../models/Pessoa');

//  @route  GET api/pessoas
//  @desc   Index (get all) pessoas
//  @access Public
router.get('/', async (req, res) => {
    try {
        const pessoas = await Pessoa.find();
        res.json(pessoas);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

//  @route  POST api/pessoas
//  @desc   Create pessoas
//  @access Public
router.post('/', [
    check('nome', 'O campo nome é obrigatório').not().isEmpty(),
    check('cpf', 'O campo CPF é obrigatório').not().isEmpty(),
    check('email', 'O campo email é obrigatório').not().isEmpty(),
    check('cidade', 'O campo cidade é obrigatório').not().isEmpty(),
    check('estado', 'O campo estado é obrigatório').not().isEmpty(),
    check('pais', 'O campo país é obrigatório').not().isEmpty(),
    check('cep', 'O campo CEP é obrigatório').not().isEmpty(),
    check('bairro', 'O campo bairro é obrigatório').not().isEmpty(),
    check('rua', 'O campo rua é obrigatório').not().isEmpty(),
    check('numero', 'O campo numero é obrigatório').not().isEmpty()
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    try {
        const camposPessoa = {};
        const { nome, cpf, email, cidade, estado, pais, cep, bairro, rua, numero, complemento } = req.body;
    
        camposPessoa.nome = nome;
        camposPessoa.cpf = cpf;
        camposPessoa.email = email;
        camposPessoa.endereco = {};
        camposPessoa.endereco.cidade = cidade;
        camposPessoa.endereco.estado = estado;
        camposPessoa.endereco.pais = pais;
        camposPessoa.endereco.cep = cep;
        camposPessoa.endereco.bairro = bairro;
        camposPessoa.endereco.rua = rua;
        camposPessoa.endereco.numero = numero;
        if(complemento) camposPessoa.endereco.complemento = complemento;

        const pessoa = new Pessoa(camposPessoa);
        await pessoa.save();

        res.json(pessoa);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  

// @route    GET api/pessoas/:id
// @desc     Show - Get pessoa by ID
// @access   Public
router.get('/:id', async (req, res) => {
    try {
      const pessoa = await Pessoa.findById(req.params.id);
  
      if (!pessoa) {
        return res.status(404).json({ msg: 'Essa pessoa não existe' });
      }
  
      res.json(pessoa);
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Essa pessoa não existe' });
      }
      res.status(500).send('Server Error');
    }
  });

//  @route  POST api/pessoas/:id
//  @desc   Update pessoa
//  @access Public
router.post('/:id', [
    [check('nome', 'O campo nome é obrigatório').not().isEmpty(),
    check('cpf', 'O campo CPF é obrigatório').not().isEmpty(),
    check('email', 'O campo email é obrigatório').not().isEmpty(),
    check('cidade', 'O campo cidade é obrigatório').not().isEmpty(),
    check('estado', 'O campo estado é obrigatório').not().isEmpty(),
    check('pais', 'O campo país é obrigatório').not().isEmpty(),
    check('cep', 'O campo CEP é obrigatório').not().isEmpty(),
    check('rua', 'O campo rua é obrigatório').not().isEmpty(),
    check('numero', 'O campo numero é obrigatório').not().isEmpty()]
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    try {
        const camposPessoa = {};
        const { nome, cpf, email, cidade, estado, pais, cep, rua, numero, complemento } = req.body;
    
        camposPessoa.nome = nome;
        camposPessoa.cpf = cpf;
        camposPessoa.email = email;
        camposPessoa.endereco = {};
        camposPessoa.endereco.cidade = cidade;
        camposPessoa.endereco.estado = estado;
        camposPessoa.endereco.pais = pais;
        camposPessoa.endereco.cep = cep;
        camposPessoa.endereco.rua = rua;
        camposPessoa.endereco.numero = numero;
        if(complemento) camposPessoa.endereco.complemento = complemento;

        let pessoa = await Pessoa.findByIdAndUpdate(req.params.id, 
            {$set: camposPessoa}, {new: true});
        
        return res.json(pessoa);
        
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

// @route    DELETE api/pessoas/:id
// @desc     Delete pessoa
// @access   Public
router.delete('/:id', async (req, res) => {
    try {
      const pessoa = await Pessoa.findById(req.params.id);
  
      if (!pessoa) {
        return res.status(404).json({ msg: 'Essa pessoa não existe' });
      }

      await pessoa.remove();
  
      res.json({ msg: 'Pessoa excluída' });
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Essa pessoa não existe' });
      }
      res.status(500).send('Server Error');
    }
  });
  

 
module.exports = router;