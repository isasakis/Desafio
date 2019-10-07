import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { createPessoa } from '../../actions/pessoa';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputMask from 'react-input-mask';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const CreatePessoa = ({ 
  createPessoa,
  history 
  }) => {

  const classes = useStyles();

  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    cidade: '',
    estado: '',
    pais: '',
    uf: '',
    cep: '',
    bairro: '',
    logradouro: '',
    numero: '',
    complemento: ''
  });

  const { nome, cpf, email, cidade, estado, pais, uf, cep, bairro, logradouro, numero, complemento } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    createPessoa(formData, history);
  };

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Grid container alignItems="center" justify="center">
            <h2>Cadastrar pessoa</h2>
          </Grid>
          <form className={classes.container} onSubmit={e => onSubmit(e)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h3>Informações pessoais</h3>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="nome"
                  label="Nome"
                  margin="normal"
                  variant="filled"
                  name="nome"
                  value={nome}
                  required
                  onChange={e => onChange(e)}
                  helperText="Insira nome."
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <InputMask
                  mask="999.999.999-99"
                  value={cpf}
                  onChange={e => onChange(e)}
                >
                  {() => <TextField
                    id="cpf"
                    label="CPF"
                    margin="normal"
                    variant="filled"
                    name="cpf"
                    required
                    fullWidth
                    helperText="Insira o CPF."
                  />}
                </InputMask>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="email"
                  label="E-mail"
                  name="email"
                  required
                  value={email}
                  onChange={e => onChange(e)}
                  margin="normal"
                  variant="filled"
                  fullWidth
                  helperText="Insira o e-mail."
                />
              </Grid>
              <Grid item xs={12}>
                <h3>Endereço</h3>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="cidade"
                  label="Cidade"
                  name="cidade"
                  required
                  value={cidade}
                  onChange={e => onChange(e)}
                  margin="normal"
                  variant="filled"
                  fullWidth
                  helperText="Insira a cidade."
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="estado"
                  label="Estado"
                  name="estado"
                  required
                  value={estado}
                  onChange={e => onChange(e)}
                  type="text"
                  margin="normal"
                  variant="filled"
                  fullWidth
                  helperText="Insira o estado."
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="pais"
                  label="País"
                  name="pais"
                  required
                  value={pais}
                  onChange={e => onChange(e)}
                  type="text"
                  margin="normal"
                  variant="filled"
                  fullWidth
                  helperText="Insira o país."
                />
              </Grid>
              <Grid item xs={4}>
                <InputMask
                  mask="aa"
                  maskChar = {null}
                  value={uf}
                  onChange={e => onChange(e)}
                >
                  {() => <TextField
                    id="uf"
                    label="UF"
                    name="uf"
                    required
                    type="text"
                    margin="normal"
                    variant="filled"
                    fullWidth
                    helperText="Insira o UF."
                  />}
                </InputMask>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="logradouro"
                  label="Logradouro"
                  name="logradouro"
                  required
                  value={logradouro}
                  onChange={e => onChange(e)}
                  margin="normal"
                  variant="filled"
                  fullWidth
                  helperText="Insira o logradouro."
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="bairro"
                  label="Bairro"
                  name="bairro"
                  required
                  value={bairro}
                  onChange={e => onChange(e)}
                  margin="normal"
                  variant="filled"
                  fullWidth
                  helperText="Insira o bairro."
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="numero"
                  label="Número"
                  name="numero"
                  required
                  value={numero}
                  onChange={e => onChange(e)}
                  type="text"
                  margin="normal"
                  variant="filled"
                  fullWidth
                  helperText="Insira o número."
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="complemento"
                  label="Complemento"
                  name="complemento"
                  value={complemento}
                  onChange={e => onChange(e)}
                  type="text"
                  margin="normal"
                  variant="filled"
                  fullWidth
                  helperText="Insira o complemento."
                />
              </Grid>
              <Grid item xs={4}>
                <InputMask
                  mask="99999-999"
                  value={cep}
                    onChange={e => onChange(e)}
                >
                  {() => <TextField
                    id="cep"
                    label="CEP"
                    required
                    name="cep"
                    margin="normal"
                    variant="filled"
                    fullWidth
                    helperText="Insira o CEP do endereço."
                  />}
                </InputMask>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Button
                variant="contained"
                color="default"
                className={classes.button}
                href='/'
              > Voltar
                  </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type='submit'
              > Salvar
                  </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default connect(
  null,
  { createPessoa }
)(CreatePessoa);

