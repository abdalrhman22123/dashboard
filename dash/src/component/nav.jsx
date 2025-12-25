import React, { Component } from 'react';
import logo from "../assets/Frame.svg"
import wed from "../assets/Vector.svg"
import box from "../assets/box.svg"
import Job from "../assets/job.svg"
import use from "../assets/user.svg"
import set from "../assets/setting.svg"
import log from "../assets/log-out.svg"
import "./nav.css"
import { Link } from 'react-router-dom';
const Nav = () => {
    return ( <>
    <div class="sidebar">
            <div className='logoo'>
    <img className='Logo' src={logo}  />
    <h2>Dashboard</h2>
            </div>
    <ul>
    <li>Analysis</li>
    <div className='drop'>
    <div>Forms</div> <br />
    <div>Web Edit</div> <br />
    </div>
    <div className='icon'>
    <img className='wed' src={wed} />
    <li>Widgets</li>
    </div>
    <div className='icon'>
    <img className='box' src={box} />    
    <li>Projects</li>
    </div>
    <div className='drop'>
        <Link to="/project">
        <div>projects List</div> <br />
        </Link>
        <Link to="/projecteditor">
        <div>project editor</div> <br />
        </Link>
        <div>Add projects</div> <br />
    </div>
    <div className='jobs'>
    <img className='job' src={Job} />
    <li>Jobs</li>
    </div>
    <div className='icon'>
     <img className='use' src={use} />  
     <Link to="/profile">
    <li>User Profile</li>
     </Link> 
    </div>
    <div className='icon'>
     <img className='set' src={set} />
     <Link to="/settings">
    <li>settings</li>
     </Link>
    </div>
    <div className='icon'>
    <img className='logout' src={log} />
    <Link to="/">
    <li>Log Out</li>
    </Link>
    </div>
    </ul>
    </div>
    </> );
}
 
export default Nav;