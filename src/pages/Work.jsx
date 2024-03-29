import React from "react";
import Footer from '../components/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faEye} from "@fortawesome/free-solid-svg-icons"

import Project1 from '../img/projects/project1.jpg'
import Project2 from '../img/projects/project2.jpg'

class Work extends React.Component {

    componentDidMount(){
      document.body.classList.remove('bg-img');
    }

    render() {
        return(
          <div>
            <main id="work">
            <h1 className="lg-heading">
                My <span className="text-secondary">Work</span>
            </h1>
            <h2 className="sm-heading">
                Check ouf some of my Projects
            </h2>
            <div class="projects">
                <div class="item">
                    <a href="https://github.com/FellCode/HCLI">
                        <img src={Project1} alt="project" />
                    </a>
                    <a href="https://github.com/FellCode/HCLI" class="btn-light">
                    <FontAwesomeIcon icon={faEye} /> Projekt
                    </a>
                    <a href="https://github.com/FellCode/HCLI" class="btn-dark">
                    <FontAwesomeIcon icon={faGithub} /> Github
                    </a>
                </div>
                <div class="item">
                    <a href="https://github.com/FellCode/react_portfolio">
                    <img src={Project2} alt="project" />
                    </a>
                    <a href="https://fellcode.me" class="btn-light">
                    <FontAwesomeIcon icon={faEye} /> Projekt
                    </a>
                    <a href="https://github.com/FellCode/HCLI" class="btn-dark">
                    <FontAwesomeIcon icon={faGithub} /> Github
                    </a>
                </div>
            </div>
            
        </main>
        <Footer />
    </div>
    )
        }
} 
  
  export default Work;