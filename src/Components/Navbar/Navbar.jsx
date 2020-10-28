import React from 'react';
import Items from './../NavItems/NavItems';
import './Navbar.css';

function Nav(props) {
    return (
        <div className = "bar">
            <span className = "title">{props.name}</span>
            {/* <Items name = "HOME"/>
            <Items name = "ABOUT"/>
            <Items name = "TRENDING"/> */}
        </div>
    );
}

export default Nav;

