import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Log from './pages/login';
const Routingapp = () => {
    return ( 
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Log />} />
    </Routes>
    </BrowserRouter>
     );
};
 
export default Routingapp;