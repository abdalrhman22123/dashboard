import React, { Component } from 'react';
import "./Home.css"
import Recs from "../assets/recs.svg"
import menu from "../assets/menu.svg"
import logo from "../assets/Frame.svg"
import peo from "../assets/image 2.svg"
const Home = () => {
    return ( <>
    <div class="sidebar">
        <div className='logoo'>
<img className='Logo' src={logo}  />
<h2>Dashboard</h2>
        </div>
<ul>
<li>Analysis</li>
<li>Widgets</li>
<li>Products</li>
<li>Jobs</li>
<li>User Profile</li>
</ul>
</div>
<div>
    <img className='recs' src={Recs} />
    <img className='menu' src={menu} />
</div>
<div>
    <img className='people' src={peo} />
</div>

    </> );
}
 
export default Home;