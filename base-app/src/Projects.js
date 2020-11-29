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
                image="{logo}"
                title="Twitter Newsfeed"
                category="Mobile App"
            />
        </div>
    )
}

export default Projects;