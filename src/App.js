import React, {useEffect} from 'react';
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

  return (
    <div id="app" className="app">
      <Header />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;