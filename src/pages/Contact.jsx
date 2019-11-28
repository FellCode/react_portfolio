import React from 'react';
import Nav from '../components/Nav'

function Contact(props) {
    return (
      <div>
        <main id="contact">
        <h1 class="lg-heading">
            Contact <span class="text-secondary">Me</span>
        </h1>
        <h2 class="sm-heading">
            This is how you can reach me...
        </h2>
        <div class="boxes">
            <div>
                <span class="text-secondary">Email:</span> test@test.de
            </div>
            <div>
                <span class="text-secondary">Phone:</span> XXXX XXXXXX
            </div>
            <div>
                <span class="text-secondary">Address:</span> Stuffstreet
            </div>

        </div>
        
    </main>


  <footer id="main-footer">
      Copyright &copy; 2018
  </footer>
      </div>
    )
  }


  export default Contact;