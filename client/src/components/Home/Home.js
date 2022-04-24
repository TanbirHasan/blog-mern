import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';

import Sidebar from '../Sidebar/Sidebar';
import './Home.css'

const Home = () => {
    const [post,setPost] = useState([]);
    const {search} = useLocation();

  

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts"+search)
           setPost(res.data);
        }
        fetchPosts();
    },[search])
    return (
        <div className='home'>
            <Header />
            <div className='container'>
                <Posts posts={post}/>
      
                <Sidebar />

            </div>
            
        </div>
    );
};

export default Home;