import React from "react"
import Thumbnail from "./Thumbnail";
import logo from './logo.svg';
import './App.css';

function Projects(props) {
    return (
        <div>
            <h1>Projects</h1>
            <Thumbnail
                link="/twitter"
                image={logo}
                title="Twitter Newsfeed"
                category="Mobile App"
            />

            <Thumbnail
                link="/airbnb"
                image="http://airbnb-image-url.jpg>"
                title="Airbnb Experiences"
                category="Website"
            />
        </div>
    )
}

export default Projects;