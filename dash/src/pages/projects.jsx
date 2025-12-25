import React, { Component } from 'react';
import "./projects.css"
import Nav from '../component/nav';
import Footer from '../component/footer';
const Proj = () => {
    return ( <>
    <Nav />
    <main class="main-content">
            <div class="page-header">
                <h1>Dashboard</h1>
                <div class="breadcrumb">
                    <span>Project list</span>
                </div>
            </div>

            <div class="content-header">
                <h2>Project list</h2>
                <select class="month-select">
                    <option>Nov</option>
                </select>
            </div>

            <div class="table-container">
                <table class="project-table">
                    <thead>
                        <tr>
                            <th>Project name</th>
                            <th>Location</th>
                            <th>Date - Time</th>
                            <th>views</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Poppi can website</td>
                            <td>Egypt, cairo</td>
                            <td>12.09.2019 - 12:53 PM</td>
                            <td>423</td>
                            <td><span class="link-badge cyan">WWW.abd</span></td>
                        </tr>
                        <tr>
                            <td>To-do List app</td>
                            <td>Egypt cairo</td>
                            <td>12.09.2019 - 12:53 PM</td>
                            <td>423</td>
                            <td><span class="link-badge orange">WWW.abd</span></td>
                        </tr>
                        <tr>
                            <td>Personal Portfolio</td>
                            <td>Egypt cairo</td>
                            <td>12.09.2019 - 12:53 PM</td>
                            <td>423</td>
                            <td><span class="link-badge pink">WWW.abd</span></td>
                        </tr>
                        <tr>
                            <td>Giza zoo web</td>
                            <td>Egypt cairo</td>
                            <td>12.09.2019 - 12:53 PM</td>
                            <td>423</td>
                            <td><span class="link-badge cyan">WWW.abd</span></td>
                        </tr>
                        <tr>
                            <td>Event planner app</td>
                            <td>Egypt cairo</td>
                            <td>12.09.2019 - 12:53 PM</td>
                            <td>423</td>
                            <td><span class="link-badge cyan">WWW.abd</span></td>
                        </tr>
                        <tr>
                            <td>Beetronic app</td>
                            <td>Egypt cairo</td>
                            <td>12.09.2019 - 12:53 PM</td>
                            <td>423</td>
                            <td><span class="link-badge cyan">WWW.abd</span></td>
                        </tr>
                        <tr>
                            <td>Tv-Os</td>
                            <td>Egypt cairo</td>
                            <td>12.09.2019 - 12:53 PM</td>
                            <td>423</td>
                            <td><span class="link-badge orange">WWW.abd</span></td>
                        </tr>
                        <tr>
                            <td>Real estate website</td>
                            <td>Egypt cairo</td>
                            <td>12.09.2019 - 12:53 PM</td>
                            <td>423</td>
                            <td><span class="link-badge pink">WWW.abd</span></td>
                        </tr>
                        <tr>
                            <td>Transportation app</td>
                            <td>Egypt cairo</td>
                            <td>12.09.2019 - 12:53 PM</td>
                            <td>423</td>
                            <td><span class="link-badge pink">WWW.abd</span></td>
                        </tr>
                        <tr>
                            <td>Fashion app</td>
                            <td>Egypt cairo</td>
                            <td>12.09.2019 - 12:53 PM</td>
                            <td>423</td>
                            <td><span class="link-badge cyan">WWW.abd</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    </> );
}
 
export default Proj;