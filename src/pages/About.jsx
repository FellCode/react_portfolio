import React from 'react';
import Potrait from '../img/portrait.jpg'

function About(props) {
    return (
    <div>
      <main id="about">
      <h1 className="lg-heading">
          About <span className="text-secondary">Me</span>
      </h1>
      <h2>Who is this guy anyway?</h2>
      <div className="about-info">
          <img src={Potrait} alt="FellCode Avatar" className="bio-image" />
          <div className="bio">
              <h3 class="text-secondary">BIO</h3>
              <p>Hi, im Felix, or FellCode on the Internet thing. I’m a young Software Developer from Germany and i have a weak spot for Web Development. I finished my apprenticeship as a Programmer and worked for a couple of Companies developing Insurance Software with C++ or Java. When i got the opportunity i deep dived into the world of web development with Javascript and all the lovely Frameworks and stuff. And i loved it. Therefore im always looking for some cool web projects and maybe even a job, where i can use some of the bleeding edge web stuff. 
              As for the creative part, i love to go out and do some photo shootings. It gives me the right balance between the logical part of coding and letting some of my creativity flow.</p>
          </div>
          <div className="job job-1">
              <h3>DXC Technology</h3>
              <h6>Software Designer</h6>
              <p>I've worked for about 5 Years at DXC with Zurich Germany as our main customer. I worked there as a Lead Developer and second Build-Manager for their Legacy Life Insurance Software.<br />
              <strong>Tech Stack:</strong><br/>
              - C++<br/>
              - Subversion<br/>
              - AngularJS<br/>
              - Ionic<br/>
              - NodeJS</p>
          </div>
          <div className="job job-2">
              <h3>Adesso Insurance Solutions</h3>
              <h6>Software Engineer</h6>
              <p>After that i transitioned to the Adesso Insurance Solutions with a complete different Tech Stack in front of me. Currently im working with the whole Java EE Stack, developing Health Insurance Software based on the in house Framework for a couple of german insurance companies.<br/>
                  <strong>Tech Stack:</strong><br/>
                  - Java EE<br/>
                  - Maven<br/>
                  - EMF<br/>
                  - DB2/Oracle Databases<br/>
                  - JBoss/Weblogic Application Server
                  - Jenkins
              </p>
          </div>
          <div className="job job-3">
              <h3>Hobby</h3>
              <h6>Web Developer</h6>
              <p>In my freetime i get to know different web development frameworks and tools and i test them in various sideprojects on my own.<br/>
                  <strong>Tech i've already used:</strong><br/>
                  - React<br/>
                  - Angular 2+<br/>
                  - EJS<br/>
                  - MongoDB<br/>
                  - SASS<br/>
                  - CSS Flexbox and Grid<br/>


              </p>
          </div>

      </div>
      
  </main>

    <footer id="main-footer">
    Copyright &copy; 2018
    </footer>
</div>
    )
  }


  export default About;