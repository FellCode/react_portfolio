import React from "react";

class Work extends React.Component {

    componentDidMount(){
      document.body.classList.remove('bg-img');
    }

    render() {
        return(
          <div>
            <main id="work">
            <h1 class="lg-heading">
                My <span class="text-secondary">Work</span>
            </h1>
            <h2 class="sm-heading">
                Check ouf some of my Projects
            </h2>
            <div class="projects">
                <div class="item">
                    <a href="#!">
                        <img src="img/projects/project1.jpg" alt="project" />
                    </a>
                    <a href="" class="btn-light">
                    <i class="fa fa-eye"> Project</i>
                    </a>
                    <a href="" class="btn-dark">
                        <i class="fa fa-github"> Github</i>
                    </a>
                </div>
                <div class="item">
                    <a href="#!">
                        <img src="img/projects/project2.jpg" alt="project" />
                    </a>
                    <a href="" class="btn-light">
                        <i class="fa fa-eye"> Project</i>
                    </a>
                    <a href="" class="btn-dark">
                        <i class="fa fa-github"> Github</i>
                    </a>
                </div>
                <div class="item">
                    <a href="#!">
                        <img src="img/projects/project3.jpg" alt="project"/>
                    </a>
                    <a href="" class="btn-light">
                    <i class="fa fa-eye"> Project</i>
                    </a>
                    <a href="" class="btn-dark">
                        <i class="fa fa-github"> Github</i>
                    </a>
                </div>
                <div class="item">
                    <a href="#!">
                        <img src="img/projects/project4.jpg" alt="project" />
                    </a>
                    <a href="" class="btn-light">
                    <i class="fa fa-eye"> Project</i>
                    </a>
                    <a href="" class="btn-dark">
                        <i class="fa fa-github"> Github</i>
                    </a>
                </div>
                <div class="item">
                    <a href="#!">
                        <img src="img/projects/project5.jpg" alt="project" />
                    </a>
                    <a href="" class="btn-light">
                    <i class="fa fa-eye"> Project</i>
                    </a>
                    <a href="" class="btn-dark">
                        <i class="fa fa-github"> Github</i>
                    </a>
                </div>
            </div>
            
        </main>


        <footer id="main-footer">
            Copyright &copy; 2018
        </footer>
          </div>
        )
    }
  }
  
  export default Work;