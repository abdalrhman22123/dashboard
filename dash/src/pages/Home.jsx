import React, { Component } from 'react';
import "./Home.css"
import Recs from "../assets/recs.svg"
import menu from "../assets/menu.svg"
import peo from "../assets/image 2.svg"
import Nav from '../component/nav';
import me from "../assets/me.svg"
const Home = () => {
    return ( <>
    <Nav />
<div>
    <img className='recs' src={Recs} />
    <img className='menu' src={menu} />
</div>
<div>
    <img className='people' src={peo} />
</div>
<img className='me' src={me} />
<div className='wel'>
    <div>Welcome Back</div>
    <div className='abd'>Abdalrhman mohamed</div>
</div>
<div className='numb'>$150.6K</div>
    </> );
}
 
export default Home;