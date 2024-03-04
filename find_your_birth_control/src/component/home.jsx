
import React, {useState} from "react";
import './homepage-styles.css';
// Importing Link from react-router-dom to 
// navigate to different end points.

import { Link } from "react-router-dom";
 
const Home = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = ()=>{
        setIsActive(!isActive);
    };
    
    return(
    <>
        <nav>
            <h1 className = 'header'>Find Your Birth Control</h1>
            <div>
                <ul className={`nav-holder ${isActive? 'active' : ''}`}>
                    <li><Link to='/' >Homepage</Link></li>
                    <li><Link to='/IUD'>IUDs</Link></li>
                    <li><Link to='/Pill'>The Pill</Link></li>
                    <li><Link to='/Shot'>The Shot</Link></li>
                    <li><Link to='/Patch'>The Patch</Link></li>
                </ul>
            </div>
            <button className={`hamburger ${isActive? 'active' : ''}`} onClick ={handleClick}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
        </nav>
        <div class="body-container"></div>
    </>);
};

function navHolder({onSquareClick}){
    return;

}
export default Home;