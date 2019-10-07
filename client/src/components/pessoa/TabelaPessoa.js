import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import { deletePessoa } from '../../actions/pessoa';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 400,
    overflow: 'auto',
  },
  deleteButton: {
    color: 'red',
  },
  editButton: {
    color: 'blue',
  },
  confirmButton: {
    backgroundColor: '#ff0000',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#820000',
    },
  },
  cancelButton: {
    backgroundColor: '#0000ff',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#000082',
    }
  },
}));

const TabelaPessoa = ({
  pessoas,
  deletePessoa
}
) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [idPessoa, setIdPessoa] = React.useState(0);

  const rows = pessoas;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function openDialog(id) {
    setOpen(true);
    setIdPessoa(id);
  }

  function closeDialog() {
    setOpen(false);
  }

  function onClickDelete(){
    deletePessoa(idPessoa);
    setOpen(false);
  }

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell key="nome">Nome</TableCell>
              <TableCell key="cpf">CPF</TableCell>
              <TableCell key="email">E-mail</TableCell>
              <TableCell key="endereço">Endereço</TableCell>
              <TableCell key="actions">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover tabIndex={-1} key={row._id}>
                  <TableCell component="th" scope="row">{row.nome}</TableCell>
                  <TableCell>{row.cpf}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.endereco.logradouro}, nº {row.endereco.numero} {row.endereco.complemento && row.endereco.complemento}
                    , {row.endereco.cidade}/{row.endereco.uf} - {row.endereco.pais}</TableCell>
                  <TableCell>
                    <Tooltip title="Editar">
                      <IconButton aria-label="edit" href={`/edit/${row._id}`} className={classes.editButton}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Excluir">
                      <IconButton aria-label="delete" onClick={() => openDialog(row._id)} className={classes.deleteButton}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                    <Dialog open={open} onClose={closeDialog} aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description">
                      <DialogTitle id="alert-dialog-title">{"Excluir pessoa"}</DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Tem certeza que deseja excluir esta pessoa?
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button variant="contained" onClick={closeDialog} autoFocus className={classes.cancelButton}>
                          Não, cancelar
                        </Button>
                        <Button variant="contained" onClick={onClickDelete} className={classes.confirmButton}>
                          Sim, quero excluir
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </TableCell>


                </TableRow>
              );

            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Página anterior',
        }}
        nextIconButtonProps={{
          'aria-label': 'Próxima página',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />

    </Paper>
  );
}

TabelaPessoa.propTypes = {
  pessoas: PropTypes.array.isRequired,
  deletePessoa: PropTypes.func.isRequired
};

export default connect(
  null, { deletePessoa }
)(TabelaPessoa);
