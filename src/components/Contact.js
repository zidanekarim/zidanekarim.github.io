import React    from 'react';
import './styles/contact.css';
import linkedinIcon from './assets/linkedin.png';
import githubIcon from './assets/github.png';

const Contact = () => {
  

  return (
    <div className="contact">
        <h1><u>Contact Me</u></h1>
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/zidanekarim" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/ThePotatoPowers" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </div>    
  );
}

export default Contact;
