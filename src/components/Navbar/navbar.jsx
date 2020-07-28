import React from 'react';
import './navbar.style.css'

export const Navbar = () => {
    return ( 
        <div>
            <nav id="navbar">
            <ul>
                <li>Cakes</li>
                <li>Birthday</li>
                <li>Anniversaries</li>
                <li>Kids Cake</li>
                <li>Fun Cake</li>
                <li>Grown up</li>
            </ul>
            <ul>
                <li><i className="fa fa-shopping-basket"></i></li>
            </ul>
            </nav>
        </div>
    )
}