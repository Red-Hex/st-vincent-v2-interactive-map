import React, { Fragment, useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { register } from '../actions/auth';

import '../css/Form.css';

const RegisterAdmin = ({ setShowRegister }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => 
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDafualt();

        console.log('New Admin Registered');

        if(password !== password2) {
            console.log('passwords do not match');
        } else {
            register({ name, email, password });
        }
    };

    return (
        <Fragment>
            <div className='help'>
                <div onClick={() => setShowRegister(false)}>
                            <IconContext.Provider value={{size:"2em", color:"#676BBC", className:"Cross"}}>
                                <FaTimes></FaTimes>
                            </IconContext.Provider>
                    </div>
                    <h2 className="title">Register a New Admin</h2>
                <form className='form' onSubmit={e => onSubmit(e)}>
                    <div className='form-group'>
                            <input
                                type='text'
                                placeholder='Name'
                                name='name'
                                value={name}
                                onChange={e => onChange(e)}
                                required
                            />
                    </div>
                    <div className='form-group'>
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type="password2"
                            placeholder="Conform Password"
                            name="password2"
                            value={password2}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input className='i-button'
                                type='submit'
                                value='Create Post'
                        />
                    </div>
                </form>
            </div>
        </Fragment>
    )
    
}

export default RegisterAdmin;