import axios from 'axios';

import {
  GET_PESSOA,
  PESSOA_ERROR
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


  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => console.log(error.msg));
    }
    dispatch({
      type: PESSOA_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

