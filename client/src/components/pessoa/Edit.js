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
import InputMask from 'react-input-mask';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  buttonVoltar: {
    marginRight: theme.spacing(1),
  },
  buttonSalvar: {
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
  match,
  history
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
    updatePessoa(formData, history, pessoa._id);
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
                    required
                    value={nome}
                    onChange={e => onChange(e)}
                    helperText="Insira o seu nome."
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
                    maskChar={null}
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
                  className={classes.buttonVoltar}
                  href='/'
                > Voltar
                  </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.buttonSalvar}
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
