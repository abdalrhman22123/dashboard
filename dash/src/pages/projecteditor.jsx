import React, { Component } from 'react';
import "./projecteditor.css" 
import Nav from '../component/nav';
import Footer from '../component/footer';
const ProjectEditor = () => {
  
    return ( <>
    <Nav />
 <main class="main-content">
        <div class="page-header">
            <h1>Dashboard</h1>
            <button class="btn-primary">Add new Project</button>
        </div>

        <div class="content-container">
            <section class="form-section">
                <h2>Project Image</h2>
                <div class="image-upload">
                    <button class="upload-btn">
                        <span class="upload-icon">+</span>
                        <span>Add Image</span>
                    </button>
                </div>
            </section>
            <section class="form-section">
                <label for="productName">Product Name</label>
                <input type="text" id="productName" class="form-input" value="Poppi soda can e-commerce"></input>
            </section>
            <section class="form-section">
                <label for="category">Category</label>
                <input type="text" id="category" class="form-input" value="E-Commerce"></input>
            </section>

            <section class="form-section">
                <label for="project">Project</label>
                <input type="text" id="project" class="form-input" value="POPPI"></input>
            </section>
            <section class="form-section">
                <label>Tags</label>
                <div class="tags-container">
                    <span class="tag">Soda</span>
                    <span class="tag">E-commerce</span>
                    <span class="tag">Fruit</span>
                    <span class="tag">Designs</span>
                    <span class="tag">Berry</span>
                </div>
            </section>

            <section class="form-section">
                <div class="editor-toolbar">
                    <button class="toolbar-btn">↶</button>
                    <button class="toolbar-btn">↷</button>
                    <select class="toolbar-select">
                        <option>Normal text</option>
                    </select>
                    <button class="toolbar-btn">≡</button>
                    <button class="toolbar-btn">☰</button>
                    <button class="toolbar-btn"><strong>B</strong></button>
                    <button class="toolbar-btn"><em>I</em></button>
                    <button class="toolbar-btn"><u>U</u></button>
                    <button class="toolbar-btn">S</button>
                    <button class="toolbar-btn">&lt;/&gt;</button>
                    <button class="toolbar-btn">⚙</button>
                    <button class="toolbar-btn">⋯</button>
                    <button class="toolbar-btn">⋮⋮</button>
                    <button class="toolbar-btn">🔗</button>
                    <button class="toolbar-btn">🖼️</button>
                    <button class="toolbar-btn">📊</button>
                    <button class="toolbar-btn">&lt;/&gt;</button>
                    <button class="toolbar-btn">⋯</button>
                    <button class="toolbar-btn">—</button>
                </div>

                <div class="editor-content">
                    <h3>Poppi soda can</h3>
                    <p class="label">E-commerce</p>
                    <p class="label">Website</p>
                    
                    <h4>Details</h4>
                    <p>this project is about website an e-commerce for a product called Poppi .as it made with a colorful website and funky, animated website animation is used for the user interaction and to a suitable for the product identity</p>
                    <p>Poppi website is a vibrant colorful website and there are multiple color pallets used in it</p>
                    
                    <div class="project-image">
                    </div>
                    
                    <p class="link">Link: <a href="#">issue error: component</a></p>
                    
                    <ul>
                        <li>unordered list item</li>
                        <li>unordered list itememunordered list itememunordered list itememunordered list itememunordered list itememunordered list itememunordered list item</li>
                        <li>unordered list item</li>
                    </ul>
                    
                    <h4>Heading1</h4>
                    <h5>Heading2</h5>
                    <h6>Heading3</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qua lobortis nisi cursus bibendum sit nulla accumsan sodales ornare. At urna viverra non suspendisse neque. Lorem. Pretium condimentum pellentesque gravida et etiam sit sed eu eutismod. Rhoncus proin orci duis scelerisque molestie turpis aliquam.</p>
                </div>
            </section>
            <div class="action-buttons">
                <button class="btn-secondary">Delete Product</button>
                <button class="btn-primary">Save</button>
            </div>
        </div>
    </main>


    </> );
}
export default ProjectEditor;