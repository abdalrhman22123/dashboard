import React, { Component } from 'react';
import "./contactme.css"
import Nav from '../component/nav';
const Cont = () => {
    return ( <>
    <Nav />
        <main class="content">
            <h1 class="page-title">Contact Us</h1>

            <div class="contact-grid">
                <section class="contact-section">
                    <h2 class="section-title">Send us a Message</h2>
                    <form class="contact-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Full Name</label>
                                <input type="text" id="name" placeholder="Enter your name" required></input>
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" placeholder="Enter your email" required></input>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input type="tel" id="phone" placeholder="Enter your phone"></input>
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <input type="text" id="subject" placeholder="Enter subject" required></input>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" rows="6" placeholder="Enter your message" required></textarea>
                        </div>

                        <button type="submit" class="submit-btn">Send Message</button>
                    </form>
                </section>

                <section class="contact-section">
                    <h2 class="section-title">Contact Information</h2>
                    
                    <div class="info-cards">
                        <div class="info-card">
                            <div class="info-icon">📧</div>
                            <h3>Email</h3>
                            <p>support@addme.com</p>
                            <p>info@adminmart.com</p>
                        </div>

                        <div class="info-card">
                            <div class="info-icon">📞</div>
                            <h3>Phone</h3>
                            <p>01111717189</p>
                            <p>+1 (555) 123-4567</p>
                        </div>

                        <div class="info-card">
                            <div class="info-icon">📍</div>
                            <h3>Address</h3>
                            <p>123 Fresh Street</p>
                            <p>Food City, FC 45789</p>
                        </div>

                        <div class="info-card">
                            <div class="info-icon">🕐</div>
                            <h3>Business Hours</h3>
                            <p>Monday - Friday</p>
                            <p>9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    
    </> );
}
 
export default Cont;