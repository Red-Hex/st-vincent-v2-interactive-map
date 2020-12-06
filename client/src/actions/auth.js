import axios from 'axios';
import {
    REGISTER_SUCCESS,
    USER_LOADED,
    REGISTER_FAIL,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Loading a user
export const loadAdmin = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try {
       const res = await axios.get('http://localhost:5000/api/auth');

       dispatch({
           type: USER_LOADED,
           payload: res.data
       });
    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        });
    }
}

// Admin Login
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('http://localhost:5000/api/auth', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadAdmin());
    } catch (error) {
        const errors = error.response.data.errors;

        if(errors) {
            console.log(errors);
        };

        dispatch({
            type: LOGIN_FAIL
        });
    }
};

//Admin Logout 
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
}
