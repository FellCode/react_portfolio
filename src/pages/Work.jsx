import React from "react";


class Work extends React.Component {


    constructor(props) {
        super(props);
      }

    componentDidMount(){
      document.body.classList.remove('bg-img');
    }

    render() {
        return(
          <div>Wörk</div>
        )
    }
  }
  
  export default Work;