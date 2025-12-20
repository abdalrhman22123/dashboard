import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Log from './pages/login';
import Home from './pages/Home';
const Routingapp = () => {
    return ( 
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Log />} />
        <Route path="//home" element={<Home />} />
    </Routes>
    </BrowserRouter>
     );
};
 
export default Routingapp;