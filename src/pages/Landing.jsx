import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub, fa500px, faInstagram } from "@fortawesome/free-brands-svg-icons"

class Landing extends React.Component {

    componentDidMount(){
        document.body.classList.add('bg-img')
    }

    render(){
        return (
        <main id="home">
                <h1 className="lg-heading">
                    Fell<span className="text-secondary">Code</span>
                </h1>
                <h2 className="sm-heading">
                    Web Developer // Programmer // Photograph
                </h2>
                <div className="icons">
                    <a target="_blank" rel="noopener noreferrer" href="http://twitter.fellcode.me">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/fellcodephotos/">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="http://code.fellcode.me">
                    <FontAwesomeIcon icon={faGithub} size="2x"  />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="http://photos.fellcode.me">
                        <FontAwesomeIcon icon={fa500px} size="2x"  />
                    </a>
                </div>
            </main>
        )
    }
  }


  export default Landing;