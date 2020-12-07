import React, {useState, useEffect, Fragment} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../actions/auth'
import { logout } from '../actions/auth';
import CreateModal from './CreateModal';


import "../css/Header.css";
import "../css/Admin.css";

export const Admin = ({ logout })  => {
    const [posts, setPosts] = useState([]);
    const [showCreate, setShowCreate] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/api/posts')

        .then((res) => {
            setPosts(res.data);
        });
    }, [showCreate]);

    const unsetUser = () => {
        logout();
    };
    
    return (
        <div className="admin">
            {showCreate ? <CreateModal setShowCreate={setShowCreate} />:null}
            <Fragment>
                <Link to="/map">
                    <p className='backButton'>Back To Map</p>
                </Link>
                <h2 className="title">Admin Panel</h2>
                <div className='admin-buttons'>
                    <p onClick={() => {setShowCreate(true)}} className='backButton'>Create Post</p>
                    <a href="/map" onClick={unsetUser}>
                        <p className='backButton'>Log Out</p>
                    </a>
                </div>
                <h2 className="title">Posts</h2>
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
                                <tr className='project' key={post['_id']}>
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
            </Fragment>
        </div>
    )
};

Admin.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Admin);