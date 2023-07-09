import React from 'react';
import './styles/skills.css';
import java from './assets/java.png';
import javascript from './assets/javascript.png';
import react from './assets/react.svg';
import python from './assets/python.svg';
import vercel from './assets/vercel.svg';
import nodejs from './assets/nodejs.svg';
import flask from './assets/flask.png';
import mongodb from './assets/mongodb.svg';
import json from './assets/json.png';
import html from './assets/html.png';
import css from './assets/css.png';
import git from './assets/git.png';

const skillsData = [
    { name: 'Java', description: 'Object-oriented programming language', icon : java },
    { name: 'JavaScript', description: 'Client-side scripting language', icon : javascript },
    { name: 'React', description: 'JavaScript library for building user interfaces', icon : react },
    { name: 'Python', description: 'General-purpose programming language',icon : python },
    { name: 'Vercel', description: 'Serverless deployment platform',icon : vercel },
    { name: 'Node.js', description: 'JavaScript runtime environment', icon: nodejs },
    { name: 'Flask', description: 'Micro web framework for Python', icon: flask },
    { name: 'MongoDB', description: 'NoSQL database', icon: mongodb },
    { name: 'JSON', description: 'Lightweight data-interchange format',icon : json },
    { name: 'HTML', description:  'Markup language',icon : html },
    { name: 'CSS', description: 'Style sheet language',icon : css },
    { name: 'Git', description: 'Version control system',icon : git },
    
];



const Skills = () => {
  return (
    <div>
        <h1><u>Skills</u></h1>
    
    <div className="skills">
      
      <div className="skills-table">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} />
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Skills;
