import React from 'react';
import Card from './Card';

const CardList = ({ artworks }) => {

  const cardArray = artworks.map((artwork, i) => {
    return <Card id={artworks[i].id} image={artworks[i].image} company={artworks[i].company} style={artworks[i].style}/>
  });

  return (
    <div className="grid">
      {cardArray}
    </div>
  )
}

export default CardList;
