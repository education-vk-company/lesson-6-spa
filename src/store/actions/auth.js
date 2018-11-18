import * as actionTypes from './actionTypes';
import axios from 'axios';

axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (JSON.parse(error.config.data).password.length < 6) {
       return error
    } else {
        return Promise.resolve({
            data: {
                token: 123,
            },
            status: 200,
            statusText: 'OK',
            headers: {},
            config: error.config
        });
    }
});

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {token},
    }
};

export const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error
    }
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('login', {email, password})
            .then(res => {
                dispatch(authSuccess(res.data.token));
            }).catch(err => {
                console.log(err);
                dispatch(authFailed(err))
            });
    }
};