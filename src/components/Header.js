import React    from 'react';
import zidane from './assets/zidane.jpg';

import './styles/header.css';

const Header = () => {
  

  return (
    <header className="header">
        <img id="profile-pic" src={zidane} alt="Zidane Karim" />
        <h1 id="title">Zidane Karim</h1>
        <h2>Rising Senior @ <a target="_blank" href="https://stuy.enschool.org/">Stuyvesant High School</a></h2>
        <h2>Senior Caucus President @<a target="_blank" href="https://senior.stuysu.org/">StuySU</a></h2>
    </header>
  );
}

export default Header;
