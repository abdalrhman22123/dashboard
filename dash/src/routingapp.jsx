import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Log from './pages/login';
import Home from './pages/Home';
import ProjectEditor from './pages/project-editor';
const Routingapp = () => {
    return ( 
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Log />} />
        <Route path="/home" element={<Home />} />
        <Route path="//project-editor" element={<ProjectEditor />} />
    </Routes>
    </BrowserRouter>
     );
};
 
export default Routingapp;