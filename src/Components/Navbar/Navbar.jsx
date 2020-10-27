import React from 'react';
import Items from './../NavItems/NavItems';
import './Navbar.css';

function Nav() {
    return (
        <div className = "bar">
            <span className = "title">THE BLOGGER</span>
            {/* <Items name = "HOME"/>
            <Items name = "ABOUT"/>
            <Items name = "TRENDING"/> */}
        </div>
    );
}

export default Nav;

