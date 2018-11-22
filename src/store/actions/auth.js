import * as actionTypes from './actionTypes';
import axios from 'axios';

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.resolve({
    data: {
      token: 'sdfsdfsef34234wefsdf234',
    },
    status: 200,
    statusText: 'Ok',
    header: {},
    config: error.config
  })
});

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token
  }
};

export const authFailed = (err) => {
  return {
    type: actionTypes.AUTH_FAILED,
    error: err,
  }
};

export const auth = (login, password) => {
  return dispatch => {
    dispatch(authStart());
    axios.post('/auth', {login, password})
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        dispatch(authSuccess(response.data.token));
      })
      .catch(error => {
        dispatch(authFailed(error));
      })
  }
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if(token) {
      dispatch(authSuccess(token));
    }
  }
};