import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const [username,setUsername] = useState("");
      const [password,setPassword] = useState("");
        const [email,setEmail] = useState("");
        const [error,setError] = useState(false)

        const handleSubmit  = async (e) => {
            e.preventDefault();
              setError(false);
            try{
                
                const res = await axios.post("/auth/register",{
                username,email,password
            })
            res.data && window.location.replace("/login");

            }catch(err){
                setError(true);
            }
          
    

        }
    return (
         <div className='register' >
            <span className="registerTitle">register Form</span>
            <form className='registerForm' onSubmit={handleSubmit}>
                 <label>Username</label>
                <input type="text" placeholder='Enter your Username...' className='registerInput' onChange={e => setUsername(e.target.value)}/>
                <label>Email</label>
                <input type="email" placeholder='Enter your email...' className='registerInput' onChange={e => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" placeholder='Enter your password...'  className='registerInput' onChange={e => setPassword(e.target.value)}/>
                <button className='registerButton' type="submit"><Link className='link' to="/register">Register</Link></button>
            </form>
            <button className='registerLoginButton'>
                <Link className='link' to="/login">Login</Link>
            </button>
           { error && <span style={{color: "red"}}>Somethig went wrong</span>}
            
        </div>
    );
};

export default Register;