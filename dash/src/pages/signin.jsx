import React, { Component } from 'react';
import "./signin.css"
import log from "../assets/log.svg"
const Sign = () => {
    return ( <>
    <img className='img' src={log} />
    <div className='sign'>SIGN IN</div>
    <div>
        <div className='first'>First Name</div>
        <div className='rec2'></div>
        <div className='rec3'></div>
    </div>
    </> );
}
 
export default Sign;