import React    from 'react';
import zidane from './assets/zidane.jpg';

import './styles/header.css';

const Header = () => {
  

  return (
    <header className="header">
        <img id="profile-pic" src={zidane} alt="Zidane Karim" />
        <h1 id="title">Zidane Karim</h1>
        <h2>Rising Freshman @ <a target="_blank" href="https://cooper.edu/">The Cooper Union</a></h2>
        <h2>Software Developer Intern @<a target="_blank" href="https://mentorapromise.org/">Mentor-A-Promise</a></h2>
    </header>
  );
}

export default Header;
