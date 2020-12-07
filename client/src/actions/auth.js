import axios from 'axios';
import { useSelector } from 'react-redux';
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

// Loading an Admin Account
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
};
// Register an Admin 
export const register = ({ name, email, password }) => async dispatch => {
    const token = useSelector(state => state.token);

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token 
        }
    };

    const body = JSON.stringify({ name, email, password });

    try {
        const res = await axios.post('/api/admins', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        console.log('Register Success');
    } catch (error) {
        const errors = error.response.data.errors;

        if(errors) {
            console.log(errors);
        }

        dispatch({
            type: REGISTER_FAIL
        });
    }
};

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
