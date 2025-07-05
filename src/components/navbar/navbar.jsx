import React from 'react';
import './navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar bg-warning navbar-expand-lg ">

        <ul className="navbar-nav d-flex justify-content-between">
            <li className='nav-item'><a className='nav-link' href="/">Home</a></li>
            <li className='nav-item'><a className='nav-link' href="/products">Products</a></li>
            <li className='nav-item'><a className='nav-link'href="/about">About</a></li>
            <li className='nav-item'><a className='nav-link' href="/contact">Contact</a></li>
        </ul>
        </nav>
    );
}