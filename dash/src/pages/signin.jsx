import React, { Component } from 'react';
import "./signin.css"
import log from "../assets/log.svg"
import Btn from '../component/btn';
const Sign = () => {
    return ( <>
    <img className='img' src={log} />
    <div className='sign'>SIGN IN</div>
    <div>
        <div className='first'>First Name</div>
        <div className='rec2'></div>
        <div className='last'>Last Name</div>
        <div className='rec3'></div>
    </div>
    <div>
        <div className='mail'>Email</div>
        <div className='rec4'></div>
    </div>
    <div>
        <div className='pass'>Password</div>
        <div className='rec5'></div>
    </div>
    <div>
        <div className='comf'>Comfirm Password</div>
        <div className='rec6'></div>
    </div>
    <Btn />
    
    <div className='you'>You already have an account Log in</div>
    </> );
}
 
export default Sign;