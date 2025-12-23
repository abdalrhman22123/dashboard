import React, { Component } from 'react';
import "./Home.css"
import Recs from "../assets/recs.svg"
import menu from "../assets/menu.svg"
import peo from "../assets/image 2.svg"
import Nav from '../component/nav';
import me from "../assets/me.svg"
import green from "../assets/green.svg"
import line from "../assets/Line 2.svg"
import red from "../assets/red.svg"
import lines from "../assets/lines.svg"
import chart from "../assets/chart.svg"
import up from "../assets/up.svg"
import cir from "../assets/cir.svg"
import cirs from "../assets/cirs.svg"
import curves from "../assets/curves.svg"
import type from "../assets/type.svg"
import logos from "../assets/logos.svg"
import vendor from "../assets/vendors.svg"
import details from "../assets/details.svg"
import store from "../assets/store.svg"
import Footer from '../component/footer';
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
<div className='total'>Total sales</div>
<img className='green' src={green} />
<div className='percent'>70%</div>
<img className='line' src={line} />
<div className='percent2'>65%</div>
<div className='growth'>Growth rate</div>
<img className='red' src={red} />
<div className='perc'>65%</div>
<div className='num'>200.4k</div>
<div className='income'>Total Income</div>
<img className='lines' src={lines} />
<img className='chart' src={chart} />
 <div className='k'>3,05K</div>
 <div className='deals'>deals</div>
<div className='percent3'>43.7%</div>
<div className='views'>Projects views</div>
<img className='up' src={up} />
<div className='cate'>Categories</div>
<img className='cir' src={cir} />
<img className='cirs' src={cirs} />
<div className='e-co' >E-commerce</div>
<div className='port'>Portfolio</div>
<div className='lo'>Logos</div>
<div className='app'>Apps</div>
<div className='Revenue'>Revenue</div>
<img className='curves' src={curves} />
<img className='type' src={type} />
<img className='logoss' src={logos} />
<img className='vendor' src={vendor} />
<img className='detailss' src={details} />
<img className='store' src={store} />
<Footer />
    </> );
}
 
export default Home;