import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Landing from '../pages/Landing';
import About from '../pages/About';
import Work from '../pages/Work';
import Contact from '../pages/Contact';
import Legal from '../pages/Legal'


export default function Header() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li class="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link to="/work">Work</Link>
              </li>
              <li class="nav-item">
                <Link to="/contact">Contact</Link>
              </li>
              <li class="nav-item">
                <Link to="/legal">Legal</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/legal">
              <Legal />
            </Route>
            <Route exact path="/">
              <Landing />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  