import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Log from './pages/login';
import Home from './pages/Home';
import ProjectEditor from './pages/projecteditor';
import Proj from './pages/projects';
import Profile from './pages/profile';
import Settings from './pages/settings';
const Routingapp = () => {
    return ( 
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Log />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projecteditor" element={<ProjectEditor />} />
        <Route path="/project" element={<Proj />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
    </Routes>
    </BrowserRouter>
     );
};
 
export default Routingapp;