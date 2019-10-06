import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { updatePessoa } from '../../actions/pessoa';
import { getPessoa } from '../../actions/pessoa';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    marginLeft: '130px',
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

const EditPessoa = ({ 
  updatePessoa,
  getPessoa,
  pessoa: { pessoa, loading },
  match
 }) => {
  useEffect(() => {
    getPessoa(match.params.id);
  }, [getPessoa, match.params.id]);

  useEffect(() => {
    setFormData({
      nome: loading || !pessoa.nome ? '' : pessoa.nome,
      cpf: loading || !pessoa.cpf ? '' : pessoa.cpf,
      email: loading || !pessoa.email ? '' : pessoa.email,
      cidade: loading || !pessoa.endereco.cidade ? '' : pessoa.endereco.cidade,
      estado: loading || !pessoa.endereco.estado ? '' : pessoa.endereco.estado,
      pais: loading || !pessoa.endereco.pais ? '' : pessoa.endereco.pais,
      uf: loading || !pessoa.endereco.uf ? '' : pessoa.endereco.uf,
      logradouro: loading || !pessoa.endereco.logradouro ? '' : pessoa.endereco.logradouro,
      numero: loading || !pessoa.endereco.numero ? '' : pessoa.endereco.numero,
      bairro: loading || !pessoa.endereco.bairro ? '' : pessoa.endereco.bairro,
      cep: loading || !pessoa.endereco.cep ? '' : pessoa.endereco.cep,
      complemento: loading || !pessoa.endereco.complemento ? '' : pessoa.endereco.complemento
    });
  }, [loading, pessoa]);

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
    updatePessoa(formData, pessoa._id);
  };

  return loading && pessoa === null ? (
    <Fragment>
      <p>Aguarde enquanto os dados da pessoa estão sendo carregados</p>
      <LinearProgress />
    </Fragment>
  ) : (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Grid container alignItems="center" justify="center">
            <h2>Editar cadastro de pessoa</h2>
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
                  className={useStyles.textField}
                  margin="normal"
                  variant="filled"
                  name="nome"
                  value={nome}
                  onChange={e => onChange(e)}
                  helperText="Insira o seu nome."
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
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
              <Grid item xs={4}>
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
              <Grid item xs={12}>
                <h3>Endereço</h3>
              </Grid>
              <Grid item xs={4}>
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
              </Grid>
              <Grid item xs={4}>
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
              </Grid>
              <Grid item xs={4}>
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
              <Grid item xs={4}>
                <TextField
                  id="uf"
                  label="UF"
                  className={useStyles.textField}
                  name="uf"
                  value={uf}
                  onChange={e => onChange(e)}
                  type="text"
                  margin="normal"
                  variant="filled"
                  fullWidth
                  helperText="Insira o UF."
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="logradouro"
                  label="Logradouro"
                  className={useStyles.textField}
                  name="logradouro"
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
                  className={useStyles.textField}
                  name="bairro"
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
              </Grid>
              <Grid item xs={4}>
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
              <Grid item xs={4}>
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

EditPessoa.propTypes = {
  getPessoa: PropTypes.func.isRequired,
  pessoa: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  pessoa: state.pessoa,
});

export default connect(
  mapStateToProps,
  { updatePessoa, getPessoa }
)(EditPessoa);
