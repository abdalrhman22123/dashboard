import React, { Component } from 'react';
import "./profile.css"
import Nav from '../component/nav';
const Settings = () => {
    return ( <>
    <Nav />
     <main class="main-content">
            <h1 class="page-title">Settings</h1>
            <section class="settings-section">
                <h2 class="section-title">Edit Profile</h2>
                
                <form class="settings-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="companyName">Company name</label>
                            <input type="text" id="companyName" name="companyName" value="Add-Me"></input>
                        </div>
                        <div class="form-group">
                            <label for="userName">User Name</label>
                            <input type="text" id="userName" name="userName" value="Add_ME"></input>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" value="Add-Me@gmail.com"></input>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" value="**********"></input>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="employees">number of employees</label>
                            <select id="employees" name="employees">
                                <option value="1090" selected>1090</option>
                                <option value="500">500</option>
                                <option value="1000">1000</option>
                                <option value="2000">2000</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="city">City</label>
                            <input type="text" id="city" name="city" value="Cairo"></input>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="address">Address</label>
                            <input type="text" id="address" name="address" value="San Jose, California, USA"></input>
                        </div>
                        <div class="form-group">
                            <label for="country">Country</label>
                            <input type="text" id="country" name="country" value="Egypt"></input>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="postalCode">Postal Code</label>
                            <input type="text" id="postalCode" name="postalCode" value="45962"></input>
                        </div>
                        <div class="form-group"></div>
                    </div>
                    
                    <div class="form-actions">
                        <button type="submit" class="btn-save">Save</button>
                    </div>
                </form>
            </section>

            <section class="settings-section">
                <h2 class="section-title">Security</h2>
                
                <div class="security-content">
                    <div class="security-option">
                        <div class="option-info">
                            <h3>Two-factor Authentication</h3>
                            <p>Enable or disable two factor authentication</p>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" checked></input>
                            <span class="slider"></span>
                        </label>
                    </div>
                    
                    <div class="password-change">
                        <h3>Change Password</h3>
                        <form class="password-form">
                            <div class="form-group">
                                <label for="currentPassword">Current Password</label>
                                <input type="password" id="currentPassword" name="currentPassword"></input>
                            </div>
                            <div class="form-group">
                                <label for="newPassword">New Password</label>
                                <input type="password" id="newPassword" name="newPassword"></input>
                            </div>
                            <div class="form-actions">
                                <button type="submit" class="btn-save">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    </> );
}
 
export default Settings;