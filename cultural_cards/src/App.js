/* App.js */
import React from 'react';
import './App.css';
import Card from './component/Card';
import aboveCardImage from './comet image.png'; // Replace with the actual path to your above card image
import leftImage from './planet image.png'; // Replace with the actual path to your left image
import Comet from './component/Comet';
import cardImage from './component/card.png'; // Import the image

function App() {
  return (
    <>
      <div className="background-image" />
      <div className="above">
      <div className="above-card-image">
        <img src={aboveCardImage} alt="Above Card Image" />
        <div className="culturas-text">CULTURALS</div>
      </div>
      </div>
      <img src={leftImage} alt="Left Image" className="left-image" />
        <div className="card-pyramid">
          <div className="card-row">
            <Card title="Dance" image={cardImage} link="#" />
            <Card title="Dance" image={cardImage} link="#" />
            <Card title="Dance" image={cardImage} link="#" />
          </div>
          <div className="card-row">
            <Card title="Dance" image={cardImage} link="#" />
            <Card title="Dance" image={cardImage} link="#" />
          </div>
          <div className="card-row">
            <Card title="Dance" image={cardImage} link="#" />
          </div>
        </div>
    </>
  );
}

export default App;
