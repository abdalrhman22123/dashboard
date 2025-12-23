import React, { Component } from 'react';
import "./footer.css"
const Footer = () => {
    return ( <>
    <footer class="footer">
    <div class="footer-container">
        <div class="footer-section brand">
            <h2>Abdalrhman Mohamed</h2>
            <p>
                With Admin Mart you can check the insights of Add Me company
                and update its categories.
            </p>
        </div>

        
        <div class="footer-section links">
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Dashboard</li>
                <li>Contact Us</li>
            </ul>
        </div>

    
        <div class="footer-section links">
            <ul>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>
        </div>

        
        <div class="footer-section contact">
            <p><strong>Email:</strong> Abdalrhmanhmouda@gmail.com</p>
            <p><strong>Phone:</strong> 01111717189</p>
            <p><strong>Address:</strong> Madinaty 114 B</p>

            <div class="social-icons">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
                <i class="fas fa-envelope"></i>
                <i class="fab fa-instagram"></i>
            </div>
        </div>

    </div>
</footer>


    </> );
}
 
export default Footer;