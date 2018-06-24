import React from 'react';
import Card from './Card';

const CardList = ({ artworks }) => {

  return (
    <div className="grid">
      {
        artworks.map((artwork, i) => {
          return (
            <Card
              key={i}
              id={artworks[i].id}
              image={artworks[i].image}
              company={artworks[i].company}
              style={artworks[i].style}
              />
          );
        })
      }
    </div>
  )
}

export default CardList;
