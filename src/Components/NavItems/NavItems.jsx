import React from 'react';
import './../Navbar/Navbar.css';

function Items(props) {
    return(
        <div className = "items">
            {props.name}
        </div>
    );
}

export default Items;