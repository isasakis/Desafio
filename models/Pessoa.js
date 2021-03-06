const mongoose = require('mongoose');

const PessoaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    endereco: {
        cidade: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        },
        pais: {
            type: String,
            required: true
        },
        uf: {
            type: String,
            required: true
        },
        cep: {
            type: String,
            required: true
        },
        bairro: {
            type: String,
            required: true
        },
        logradouro: {
            type: String,
            required: true
        },
        numero: {
            type: Number,
            required: true
        },
        complemento: {
            type: String
        }
    }
});

module.exports = Pessoa = mongoose.model('pessoas', PessoaSchema);