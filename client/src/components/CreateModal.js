import React, { Fragment, useState, useEffect} from 'react';
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import axios from 'axios';

import '../css/Form.css'

const CreateModal = ({setShowCreate}) => {
    const [formData, setFormData] = useState({
        name: '',
        category_id: '',
        description: '',
        lattitude: '',
        longitude: ''
    });

    const [categories, setCategories] = useState([]);

    const { name, category_id, description, lattitude, longitude } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = async e => {
        e.preventDefault();
        console.log('Post Created');

       axios.post('http://localhost:5000/api/posts', formData, {
           headers: {
               'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjVmYzZhMWU1NWZjZDgxNjdkMDRjZTIzMyJ9LCJpYXQiOjE2MDY4NjE0MDksImV4cCI6MTYwNzIyMTQwOX0._2owKanw3iySF-pe7XgLWuaAyxlzKK8RAJHbSgOfJ6o'
           }
       })
            .then(() => {
                console.log('Post Created');
                setShowCreate(false);
            }) .catch(error => {
                console.log(error.message);
            }) 
    }


    useEffect(() => {
        axios.get('http://localhost:5000/api/categories')
            .then(res => {
                setCategories(res.data);
            })
    }, []);

    return (
        <Fragment>
            <div className='help'>
                <div onClick={() => setShowCreate(false)}>
                        <IconContext.Provider value={{size:"2em", color:"#676BBC", className:"Cross"}}>
                            <FaTimes></FaTimes>
                        </IconContext.Provider>
                </div>
                <h2 className="title">Create Marker</h2>
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
                        <select value={category_id} name='category_id' onChange={onChange} required>
                            <option value='' disabled>Select a Category</option>
                            
                            {categories.map(category => {
                                return (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Description'
                            name='description'
                            value={description}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='number'
                            placeholder='Lattitude'
                            name='lattitude'
                            value={lattitude}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input className='i-button'
                            type='number'
                            placeholder='Longitude'
                            name='longitude'
                            value={longitude}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <button type='submit'>Create Post</button>
                </form>
        </div>
        </Fragment>
    )
}

export default CreateModal;