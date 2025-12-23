import React, { Component } from 'react';
import "./btn.css"
import { Link } from 'react-router-dom';
const Btn = () => {
    return ( <>
    
   <Link to="/home">
   
    <div className='sub'>Submit</div>
   </Link>
    
    
    </> );
}
 
export default Btn;