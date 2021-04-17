import './OpenTitle.css';
import Button from 'react-bootstrap/Button';
function Title() {
    return(
        <div className = "texts">
            <h1>Well,Hello there !</h1>
            <Button href = "#section2" variant="outline-warning" size = "sm">Explore</Button>{' '}
            {/* did some change here */}
            {/* second change */}
        </div>
    );
}

export default Title;