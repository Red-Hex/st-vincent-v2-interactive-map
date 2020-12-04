import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import CreateModal from './CreateModal';

import "../css/Header.css";
import "../css/Admin.css";

const Admin = ()  => {
    const [posts, setPosts] = useState([]);
    const [showCreate, setShowCreate] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/api/posts')

        .then((res) => {
            setPosts(res.data);
        });
    }, [showCreate]);

    
    return (
        <div class="admin">
            {showCreate ? <CreateModal setShowCreate={setShowCreate} />:null}
            <React.Fragment>
                <Link to="/map">
                    <p className='backButton'>Back To Map</p>
                </Link>
                <h2 class="title">Admin Panel</h2>
                <p onClick={() => {setShowCreate(true)}} className='backButton'>Create Post</p>
                <h2 class="title">Posts</h2>
                <table className='post-container'>
                    <thead>
                        <tr>
                            <th>Post Name</th>
                            <th>Lattitude</th>
                            <th>Longitude</th>
                            <th colSpan='2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => {
                            return (
                                <tr className='project' key={post.id}>
                                    <td>{post.name}</td>
                                    <td>{post.lattitude}</td>
                                    <td>{post.longitude}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </React.Fragment>
        </div>
    )
}

export default Admin;