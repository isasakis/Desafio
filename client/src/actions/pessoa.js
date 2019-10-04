import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_PESSOA,
  PESSOA_ERROR,
  DELETE_PESSOA
} from './types';

// Create pessoa
export const createPessoa = (
  formData,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post('/api/pessoas', formData, config);

    dispatch({
      type: GET_PESSOA,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Cadastro de pessoa atualizado com sucesso' : 'Cadastro de pessoa criado com sucesso', 'success'));

  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PESSOA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get pessoa by ID
export const getPessoa = id => async dispatch => {
  try {
    const res = await axios.get(`/api/pessoas/${id}`);

    dispatch({
      type: GET_PESSOA,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PESSOA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete pessoa
export const deletePessoa = id => async dispatch => {
  try {
    await axios.delete(`/api/pessoas/${id}`);

    dispatch({
      type: DELETE_PESSOA,
      payload: id
    });

    dispatch(setAlert('Cadastro de pessoa excluído com sucesso', 'success'));
  } catch (err) {
    dispatch({
      type: PESSOA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

