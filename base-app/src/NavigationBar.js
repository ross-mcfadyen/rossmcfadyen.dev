import {Link} from "react-router-dom";
import React from "react";

function NavigationBar() {
    return (
    <div className='Nav'>
            <Link to="/" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>
    </div>
    )
}

export default NavigationBar;