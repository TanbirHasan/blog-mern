import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { Context } from '../context/Context';

import './SinglePost.css'

const SinglePost = () => {
    const [post,setPost] = useState({})
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [updateMode,setUpdateMode] = useState(false)
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const PF = "http://localhost:5000/images/";
    const {user} = useContext(Context);

    const handleDelete = async () => {
    
        try{
             await axios.delete(`/posts/${post._id}`,{
                 data : {username:user.username}
                });
             window.location.replace("/");

        }
        catch(err){

        }
   
    }
    const handleUpdate = async () => {
            try{
             await axios.put(`/posts/${post._id}`,{
                username:user.username,title,desc}
                );
            //  window.location.reload("/");
                  setUpdateMode(false);

        }
        catch(err){

        }

    }

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/"+path)
           setPost(res.data);
           setTitle(res.data.title);
           setDesc(res.data.desc);
        }
        getPost();
    },[path])
    return (
       <div className='SinglePost'>
           <div className="singlePostWrapper">
            {
                post.photo && (
                     <img src={PF + post.photo} alt="" className="singlePostImg"/>

                )
            }
            {
                updateMode ? <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} className='singlePostTitleInput'/> : (
              
               <h1 className='singlePostTitle'>{title}
               {post.username === user?.username && 
               <div className="singlePostEdit">
                   <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                   <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
               </div>
}
               </h1>
               )
            }
               <div className="singlePostInfo">
                   <span className='singlePostAuthor'>
                       
                       Author :
                       <Link to={`/?user=${post.username}`} className="link">
                              <b>{post.username}</b>
                       </Link>
                     </span>
                     
                      <span className='singlePostDate'>Author : <b>{new Date(post.createdAt).toDateString()}</b></span>
               </div>
               {
                   updateMode ? (
                       <textarea className='singlePostDescInput' value={desc} onChange={(e) => setDesc(e.target.value)}/> ): (
                               <p className='singlePostDesc'>{desc}</p>

                       )
               }
               {
                   updateMode &&  <button className='singlePostButton' onClick={handleUpdate}>Update</button>
               }
              
           
           </div>
       </div>
    );
};

export default SinglePost;