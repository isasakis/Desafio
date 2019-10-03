import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    margin: 20
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
  }
}));

const CreatePessoa = () => {

  const classes = useStyles();

  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    cidade: '',
    estado: '',
    pais: '',
    cep: '',
    bairro: '',
    rua: '',
    numero: '',
    complemento: ''
  });

  const { nome, cpf, email, cidade, estado, pais, cep, bairro, rua, numero, complemento } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    //createPessoa(formData);
  };

  return (
    <div className={classes.root}>

      <Card>
        <CardContent>
          <Grid container alignItems="center" justify="center">
            <h1>Cadastrar pessoa</h1>
          </Grid>
          <form className={classes.container} onSubmit={e => onSubmit(e)}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
            <h2>Informações pessoais</h2>
            </Grid>
              <Grid item xs={6}>
                <TextField
                  id="nome"
                  label="Nome"
                  className={useStyles.textField}
                  margin="normal"
                  variant="filled"
                  name="nome"
                  value={nome}
                  onChange={e => onChange(e)}
                  helperText="Insira o seu nome."
                  fullWidth
                />
                <TextField
                  id="email"
                  label="E-mail"
                  className={useStyles.textField}
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                  margin="normal"
                  variant="filled"
                  fullWidth
                  helperText="Insira o seu e-mail."
                />
              </Grid>
              <Grid item xs={6}>
              <TextField
                  id="cpf"
                  label="CPF"
                  className={useStyles.textField}
                  margin="normal"
                  variant="filled"
                  name="cpf"
                  value={cpf}
                  onChange={e => onChange(e)}
                  fullWidth
                  helperText="Insira o seu CPF."
                />
              </Grid>
              <Grid item xs={12}>
                <h2>Endereço</h2>
                </Grid>
                <Grid item xs={6}>
                <TextField
                  id="cep"
                  label="CEP"
                  className={useStyles.textField}
                  name="cep"
                  value={cep}
                  onChange={e => onChange(e)}
                  margin="normal"
                  variant="filled"
                  fullWidth
                  helperText="Insira o CEP do seu endereço."
                />
                <TextField
                  id="cidade"
                  label="Cidade"
                  className={useStyles.textField}
                  name="cidade"
                  value={cidade}
                  onChange={e => onChange(e)}
                  margin="normal"
                  variant="filled"
                  fullWidth
                  helperText="Insira a sua cidade."
                />
                <TextField
                  id="estado"
                  label="Estado"
                  className={useStyles.textField}
                  name="estado"
                  value={estado}
                  onChange={e => onChange(e)}
                  type="text"
                  margin="normal"
                  variant="filled"
                  fullWidth
                  helperText="Insira o seu estado."
                />
              <TextField
                  id="pais"
                  label="País"
                  className={useStyles.textField}
                  name="pais"
                  value={pais}
                  onChange={e => onChange(e)}
                  type="text"
                  margin="normal"
                  variant="filled"
                  fullWidth
                  helperText="Insira o seu país."
                />
              </Grid>
              <Grid item xs={6}>
              <TextField
                  id="bairro"
                  label="Bairro"
                  className={useStyles.textField}
                  name="bairro"
                  value={bairro}
                  onChange={e => onChange(e)}
                  margin="normal"
                  variant="filled"
                  fullWidth
                  helperText="Insira o bairro."
                />
              <TextField
                  id="rua"
                  label="Rua"
                  className={useStyles.textField}
                  name="rua"
                  value={rua}
                  onChange={e => onChange(e)}
                  margin="normal"
                  variant="filled"
                  fullWidth
                  helperText="Insira a sua rua."
                />
                <TextField
                  id="numero"
                  label="Número"
                  className={useStyles.textField}
                  name="numero"
                  value={numero}
                  onChange={e => onChange(e)}
                  type="text"
                  margin="normal"
                  variant="filled"
                  fullWidth
                  helperText="Insira o número."
                />
                <TextField
                  id="complemento"
                  label="Complemento"
                  className={useStyles.textField}
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
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
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


export default (CreatePessoa);
