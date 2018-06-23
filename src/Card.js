import React from 'react';

const Card = ({ id, image, style, company }) => {
  return (
    <div className="card">
      <img className="card-image" src={image} alt=""/>
      <div className="card-text">
        <p>{company}</p>
      </div>
    </div>
  )
}

export default Card;
