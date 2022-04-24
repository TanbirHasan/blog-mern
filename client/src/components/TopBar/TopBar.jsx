import React, { useContext } from 'react';
import './TopBar.css'
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

const TopBar = () => {

  const {user,dispatch} = useContext(Context);



  const handleLogout = () => {
    dispatch({type : "LOGOUT"})
    console.log('logout button clicked');
    

  }
    return (
        <div className='top'>
            <div className='topleft'>
                 <i className="topIcon fab fa-facebook-square"></i> 
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                </div>
              <div className='topcenter'>
                  <ul className='topList'>
                      <li className='topListItem'>
                        {
                           <Link className='link' to="/">Home</Link>
                        }
                      </li>
                      <li className='topListItem'>
                        {
                          <Link className='link' to="/about">About</Link>
                        }
                      </li>
                        <li className='topListItem'>
                          {
                            <Link className='link'  to="/write">

                               Write
                            </Link>
                          }
                        </li>
                        <li className="topListItem">
                          {
                            <Link className='link' to="/contact">
                              Contact
                            </Link>
                          }
                        </li>
                          <li className='topListItem'>
                            {
                              <Link className='link'  to="/register">
                               {
                                 !user && "register"
                               }
                              </Link>
                            }
                          </li>
                            <li className='topListItem'>
                              {
                                <Link className='link'  to="/login">
                                  {
                                    !user && "Login"
                                  }
                                </Link>
                              }
                            </li>

                              <li className='topListItem' onClick={handleLogout}>
                                {
                                  user && "Logout"
                                }
                              </li>
                  </ul>

              </div>
                <div className='topright'>
                  {
                    user ? (
                      <Link to="/settings">
                          <img src={user.profilePic} className='topImg' alt='person'/>
                      </Link>
                       
                  

                    ) : (
                      <ul className='topListItem'>
                          <Link className="link" to="/login">Login</Link>
                         <Link className="link" to="/register">Register</Link>
                      
                      </ul>
                  

                    )
                  
                  }
                     <i className="topSearchIcon fas fa-search"></i>
                  
                </div>
            
        </div>
    );
};

export default TopBar;