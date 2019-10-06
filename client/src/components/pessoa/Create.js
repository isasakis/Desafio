import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { createPessoa } from '../../actions/pessoa';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tooltip from '@material-ui/core/Tooltip';
import DialogActions from '@material-ui/core/DialogActions';


const useStyles = makeStyles(theme => ({
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
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const CreatePessoa = ({ createPessoa }) => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

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
    createPessoa(formData);
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Tooltip title="Adicionar pessoa" aria-label="add">
        <Fab color="primary" onClick={handleClickOpen} className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Dialog maxWidth="lg" open={open}
        onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Cadastrar pessoa </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para cadastrar uma nova pessoa, preencha os dados abaixo.
          </DialogContentText>
          <Grid container alignItems="center" justify="center">
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
              <DialogActions>
                <Button variant="contained" onClick={handleClose} color="primary" autoFocus>
                  Cancelar
                        </Button>
                <Button variant="contained" onClick={e => onSubmit(e)} color="secondary">
                  Salvar
                        </Button>
              </DialogActions>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default connect(
  null,
  { createPessoa }
)(CreatePessoa);

