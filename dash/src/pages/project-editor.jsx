import React, { Component } from 'react';
import "./project-editor.css" 
const ProjectEditor = () => {
    return ( <>

  <main class="main">
    <header class="topbar">
      <input type="search" placeholder="Search..." />
      <div class="top-icons">
        <span>English</span>
        <span>🔔</span>
        <span>👤</span>
      </div>
    </header>
    <section class="content">
      <h1>Add New Project</h1>

      <div class="card">
        
        <label>Project Image</label>
        <div class="upload-box">+ Add Image</div>

        <label>Product Name</label>
        <input type="text" value="Poppi soda can e-commerce" />

        <label>Category</label>
        <input type="text" value="E-Commerce" />

        <label>Project</label>
        <input type="text" value="POPPI" />

        <label>Tags</label>
        <div class="tags">
          <span>Soda</span>
          <span>E-commerce</span>
          <span>Fruit</span>
          <span>Designs</span>
          <span>Berry</span>
        </div>

        <label>Details</label>
        <textarea rows="6">
This project is about website e-commerce for a product called Poppi.
        </textarea>

        <div class="actions">
          <button class="danger">Delete Product</button>
          <button class="primary">Save</button>
        </div>

      </div>
    </section>
    <footer class="footer">
      <div>
        <h3>Abdalrhman Mohamed</h3>
        <p>Email: support@addme.com</p>
        <p>Phone: 0111177189</p>
      </div>
      <div class="footer-links">
        <a>Home</a>
        <a>Products</a>
        <a>Dashboard</a>
        <a>Contact Us</a>
      </div>
    </footer>

  </main>



    </> );
}
export default ProjectEditor;