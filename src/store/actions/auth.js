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

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData
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
            .then(data => {
                console.log(data);
                dispatch(authSuccess(data));
            }).catch(err => {
                console.log(err);
                dispatch(authFailed(err))
            });
    }
};