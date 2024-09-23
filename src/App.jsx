import { useState } from 'react'
import ResourceCard from './components/ResourceCard';

import './App.css'

const App = () => {
  const resources = [
    { title: 'Learn React', description: 'A guide to learn React from scratch.', link: 'https://reactjs.org/' },
    { title: 'MDN Web Docs', description: 'Comprehensive documentation for web development.', link: 'https://developer.mozilla.org/' },
    { title: 'FreeCodeCamp', description: 'Learn to code for free.', link: 'https://www.freecodecamp.org/' },
    { title: 'Codecademy', description: 'Interactive coding tutorials.', link: 'https://www.codecademy.com/' },
    { title: 'CSS Tricks', description: 'Tips and tricks for CSS.', link: 'https://css-tricks.com/' },
    { title: 'JavaScript.info', description: 'Deep dive into JavaScript.', link: 'https://javascript.info/' },
    { title: 'Stack Overflow', description: 'Ask questions and share knowledge.', link: 'https://stackoverflow.com/' },
    { title: 'Dev.to', description: 'A community of developers sharing ideas.', link: 'https://dev.to/' },
    { title: 'Frontend Mentor', description: 'Frontend challenges to improve your coding skills.', link: 'https://www.frontendmentor.io/' },
    { title: 'W3Schools', description: 'Web development tutorials and references.', link: 'https://www.w3schools.com/' }
  ];

  return (
    <div className="App">
      <h1>Halal Restaurants In Dallas, TX</h1>
      <h2>Welcome to the best food!</h2>
      <div className="resource-grid">
        {resources.map((resource, index) => (
          <ResourceCard 
            key={index}
            title={resource.title}
            description={resource.description}
            link={resource.link}
          />
        ))}
      </div>
    </div>
  );
};

export default App
