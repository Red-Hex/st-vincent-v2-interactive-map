import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => 
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
            console.log('Success')
    }
    return (
        <Fragment>
            <h2 class="title">Log In to Admin Panel</h2>
            <form className='login' onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        vaule={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        vaule={password}
                        onChange={e => onChange(e)}
                        required
                    />
                    <input
                        type='submit'
                        value='Login'
                    />
                </div>
            </form>
        </Fragment>
    )
}

export default Login;