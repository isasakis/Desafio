import {
    GET_PESSOA,
    PESSOA_ERROR
  } from '../actions/types';
  
  const initialState = {
    pessoa: null,
    pessoas: [],
    loading: true,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_PESSOA:
        return {
          ...state,
          pessoa: payload,
          loading: false
        };
      case PESSOA_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      default:
        return state;
    }
  }
  