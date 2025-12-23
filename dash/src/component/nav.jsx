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
        <Link to="//project-editor">
        <div>projects List</div> <br />
        </Link>
        <div>project editor</div> <br />
        <div>Add projects</div> <br />
    </div>
    <div className='jobs'>
    <img className='job' src={Job} />
    <li>Jobs</li>
    </div>
    <div className='icon'>
     <img className='use' src={use} />   
    <li>User Profile</li>
    </div>
    <div className='icon'>
     <img className='set' src={set} />
    <li>settings</li>
    </div>
    <div className='icon'>
    <img className='logout' src={log} />
    <li>Log Out</li>
    </div>
    </ul>
    </div>
    </> );
}
 
export default Nav;