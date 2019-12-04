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


class Nav extends React.Component {


    constructor(props) {
        super(props);
        this.state = { showMenu: false };
        this.toggleMenu = this.toggleMenu.bind(this);
      }

      toggleMenu() {
        this.setState(prevState => ({
            showMenu : !prevState.showMenu
        }))
      }


    render() {
        return(
            <Router>
        <div>
          <header>
            <div onClick={this.toggleMenu} className={this.state.showMenu ? 'close menu-btn' : 'menu-btn'}>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>

            <nav className={this.state.showMenu ? 'menu show' : 'menu'}>
                <div className={this.state.showMenu ? 'menu-branding show' : 'menu-branding'}>
                    <div className="portrait">

                    </div>
                </div>
                <ul className={this.state.showMenu ? 'menu-nav show' : 'menu-nav'}>
                    <li onClick={this.toggleMenu} className={this.state.showMenu ? 'nav-item show' : 'nav-item'}>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li onClick={this.toggleMenu} className={this.state.showMenu ? 'nav-item show' : 'nav-item'}>
                        <Link className="nav-link" to="/about">About Me</Link>
                    </li>
                    <li onClick={this.toggleMenu} className={this.state.showMenu ? 'nav-item show' : 'nav-item'}>
                        <Link className="nav-link" to="/work">Work</Link>
                    </li>
                    <li onClick={this.toggleMenu} className={this.state.showMenu ? 'nav-item show' : 'nav-item'}>
                        <Link className="nav-link" to="/contact">How To Reach Me</Link>
                    </li>
                    <li onClick={this.toggleMenu} className={this.state.showMenu ? 'nav-item show' : 'nav-item'}>
                        <Link className="nav-link" to="/privacy">Privacy</Link>
                    </li>
                </ul>
            </nav>
        </header>
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
            <Route path="/privacy">
              <Legal />
            </Route>
            <Route exact path="/">
              <Landing />
            </Route>
          </Switch>
        </div>
      </Router>
        )
    }
  }
  
  export default Nav;