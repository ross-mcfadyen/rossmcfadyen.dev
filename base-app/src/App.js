import React from "react";
import logo from './logo.svg';

import {BrowserRouter, Route, Link} from 'react-router-dom';

import Projects from "./Projects";
import Articles from "./Arcticles";
import About from "./About";

import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div className="App">

          {/*Setup Router*/}

          <Route exact path="/" component={Projects}/>
          <Route path="/articles" component={Articles}/>
          <Route path="/about" component={About}/>

          <div className="Navigation">
            <img src={logo} className="logo" alt="Logo Image"/>
            <div className="navigation-sub">

              {/*Setup the links*/}
              <Link to="/" className="item">Projects</Link>
              <Link to="/articles" className="item">Articles</Link>
              <Link to="/about" className="item">About</Link>

            </div>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
