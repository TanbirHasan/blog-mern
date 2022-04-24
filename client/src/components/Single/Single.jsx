import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SinglePost from '../SinglePost/SinglePost';
import './Single.css'

const Single = () => {
    return (
        <div className='Single'>
            <SinglePost />
            <Sidebar />
            
        </div>
    );
};

export default Single;