import React from "react";
import Button from 'react-bootstrap/Button';
import './Test.css';


function Test() {
    return(
        <div className = "box">
            <h1>Post Name</h1>
            <h3>Content</h3>
            <h2>Author</h2>
            <Button variant="outline-dark">Open</Button>{' '}
            "learning git hub"
        </div>
    );
}

export default Test;

