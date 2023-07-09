import React, {useEffect, useRef} from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css'


const App = () => {

  useEffect(() => {
    const appElement = document.getElementById('app');
    appElement.classList.add('fade-in');
    // Remove the fade-in class after the animation completes
    const animationDuration = 1500; // Duration in milliseconds
    setTimeout(() => {
      appElement.classList.remove('fade-in');
    }, animationDuration);
  }, []);

  
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="app" className="app">
      <nav className="navbar">
        <ul className="nav-list">
          <li onClick={() => scrollToRef(headerRef)}>Home</li>
          <li onClick={() => scrollToRef(aboutRef)}>About</li>
          <li onClick={() => scrollToRef(skillsRef)}>Skills</li>
          <li onClick={() => scrollToRef(contactRef)}>Socials</li>
        </ul>
      </nav>
      <div ref={headerRef}>
        <Header />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default App;