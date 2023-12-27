import React from 'react';
import './Card.css';
import cardImage from './card.png'; // Import the image

export default function Card() {
  return (
    <>
      <div className="hexagon">
        <img src={cardImage} alt="Card Image" />
        <div className="card-content">
          <h2 className="card-title">Dance</h2>
          <a href="#" className="learn-more-link">learn more</a>
        </div>
      </div>
    </>
  );
}
