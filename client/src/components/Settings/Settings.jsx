import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Context } from '../context/Context';
import Sidebar from '../Sidebar/Sidebar';
import './Settings.css'

const Settings = () => {
    const {user} = useContext(Context);
    const [file,setFile] = useState(null);
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [success,setSuccess] = useState(false);




        const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedUser = {
            userId : user._id,
            username,
            email,
            password
        }
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename);
            data.append("file",file);
            updatedUser.profilePic = filename;
            try{
                await axios.post("/upload",data);
              

            }catch(err){

            }
         }
            try{
               await axios.put("/users/"+user._id,updatedUser);
                 setSuccess(true)
            

            }
            catch(err){

            }
       
       
    }
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settigsUpdateTitle">Update Your Account</span>
                    <span className="settigsDeleteTitle">Delete Your Account</span>

                </div>
                <form className='settingsForm' onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src={user.profilePic} alt="" />
                        <label htmlFor="fileInput"><i class="settingsPPIcon fa-solid fa-user"></i></label>
                        <input type="file" id='fileInput' style={{display : 'none'}} onChange={(e) => setFile(e.target.files[0]) }/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} />
                     <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
                     <label>Password</label>
                    <input type="password"  />
                    <button className='settingsSubmit' type='submit'>Submit</button>
                    {
                        success && <span style={{color : 'green',marginLeft : '10px'}}>Profile has been updated</span>
                    }
                </form>
            </div>
            <Sidebar />
            
        </div>
    );
};

export default Settings;