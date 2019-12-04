import React from 'react';
import Footer from '../components/Footer';

class Contact extends React.Component{

    componentDidMount(){
        document.body.classList.remove('bg-img');
    }

    render(){
    return (
      <div>
        <main id="contact">
            <h1 className="lg-heading">
                Contact <span class="text-secondary">Me</span>
            </h1>
            <h2 className="sm-heading">
                This is how you can reach me...
            </h2>
            <div className="boxes">
                <div>
                    <span className="text-secondary">Email:</span> contact@fellcode.de
                </div>
                <div>
                    <span className="text-secondary">Twitter:</span> @Fellcode
                </div>
            </div>

        </main>
        <Footer /> 
      </div>
    )
    }
  }


  export default Contact;