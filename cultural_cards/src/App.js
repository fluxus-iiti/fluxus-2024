// App.js

import React from 'react';
import './App.css';
import Card from './component/Card';
import aboveCardImage from './comet image.png'; // Replace with the actual path to your image

function App() {
  return (
    <div className="app-container">
      <img src={aboveCardImage} alt="Above Card Image" className="above-card-image" />
      <Card />
      <div className="culturas-text">CULTURALS</div>
    </div>
  );
}

export default App;
