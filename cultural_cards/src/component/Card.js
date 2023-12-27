import React from 'react';
import './Card.css';
import cardImage from './card.png'; // Import the image

export default function Card(props) {
  return (
    <>
    <div className="card">

      <div className="hexagon">
        <img src={props.image} alt="Card Image" />
        <div className="card-content">
          <h2 className="card-title">{props.title}</h2>
          <a href={props.link} className="learn-more-link">learn more</a>
        </div>
      </div>
    </div>
    </>
  );
}
