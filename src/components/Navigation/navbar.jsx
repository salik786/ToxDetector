import React from 'react'
import "./navbar-style.css"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div>
            <header class="header">
                <nav class="navbar">
                    <Link to="/" className="nav-logo">  <img src="https://i.ibb.co/yPxbkV7/logo.png" height="50" alt="logo" border="0"></img>
                        <h4>ToxDetector</h4></Link>
                    <ul class="nav-menu">
                        <li class="nav-item">
                            <Link to="/" className="nav-link">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link">Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/dashboard" className="nav-link ">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/login" className="nav-link btn">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/register" className="nav-link btn">Register</Link>
                        </li>
                    </ul>
                    <div class="hamburger">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
