import React from "react";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import Projects from "./Projects";
import Articles from "./Arcticles";
import About from "./About";
import NavigationBar from "./NavigationBar";

import './App.css';

function App() {
  return (
      <BrowserRouter>
        <NavigationBar/>

        <div className="App">
            <Route exact path="/" component={Projects}/>
            <Route path="/articles" component={Articles}/>
            <Route path="/about" component={About}/>
        </div>
      </BrowserRouter>
  );
}

export default App;
