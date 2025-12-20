import React, { Component } from 'react';
import "./login.css";
import log from "../assets/log.svg";
import Btn from '../component/btn';
const Log = () => {
    
    return ( <>
    < img className='log' src={log} />
    <div className='in'>LOG IN</div>
    
        <div className='email'>Email</div>
        <div className='rec1'></div>
    <div className='sec2'>
        <div className='pass'>Password</div>
        <div className='rec2'></div>
    </div>
    <Btn />
    
    </> );
}
 
export default Log;