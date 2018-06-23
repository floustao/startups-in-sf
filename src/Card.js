import React from 'react';

const Card = (props) => {
  return (
    <div className="grid">
      <div className="card card-image">
        <img src={props.image} alt=""/>
        <div className="card-text">
          <h2>Zeplin</h2>
        </div>
      </div>
    </div>
    )
}

export default Card;
