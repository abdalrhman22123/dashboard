import React, { Component } from 'react';
import "./profile.css"
import Nav from '../component/nav';
import Me from "../assets/me.svg"
const Profile = () => {
    return ( <>
    <Nav />
    <main class="main-content">
            <h1 class="page-title">User Profile</h1>
            
            <div class="profile-header">
                <div class="profile-avatar">
                    <img className='abd' src={Me} />
                </div>
                <div class="profile-info">
                    <h2>Abdalrhman mohamed</h2>
                    <p class="job-title">UX/UI Designer</p>
                    <p class="location">Cairo, Egypt</p>
                    <div class="tags">
                        <span class="tag">Designer</span>
                        <span class="tag">UX Research</span>
                    </div>
                </div>
            </div>

            <div class="edit-profile-section">
                <h3>Edit Profile</h3>
                
                <form class="profile-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName"></input>
                        </div>
                        <div class="form-group">
                            <label for="secondName">Second Name</label>
                            <input type="text" id="secondName" name="secondName"></input>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email"></input>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password"></input>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="age">Age</label>
                            <input type="number" id="age" name="age"></input>
                        </div>
                        <div class="form-group">
                            <label for="city">City</label>
                            <input type="text" id="city" name="city"></input>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="address">Address</label>
                            <input type="text" id="address" name="address"></input>
                        </div>
                        <div class="form-group">
                            <label for="address2">Address Line 2</label>
                            <input type="text" id="address2" name="address2"></input>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="postalCode">Postal Code</label>
                            <input type="text" id="postalCode" name="postalCode"></input>
                        </div>
                        <div class="form-group"></div>
                    </div>
                </form>
            </div>
        </main>
    </> );
}
 
export default Profile;