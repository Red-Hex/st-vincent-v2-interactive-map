import React, { Fragment, useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import axios from 'axios';
import { useSelector } from 'react-redux';

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
    
    const token = useSelector(state => state.token);

    const onSubmit = async e => {

        if(password !== password2) {
            console.log('passwords do not match');
        } else {
            e.preventDefault();
            setShowRegister(false);

            console.log('New Admin Registered');
    
            axios.post('http://localhost:5000/api/admins', formData, {
              headers: {
                  'x-auth-token': token
              }
            });
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
                            placeholder="Confirm Password"
                            name="password2"
                            value={password2}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input className='i-button'
                                type='submit'
                                value='Create Admin'
                        />
                    </div>
                </form>
            </div>
        </Fragment>
    )
    
}

export default RegisterAdmin;