import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ toggleFavourite, selected }) => {

  return (
    <button className="photo-list__fav-icon" onClick={toggleFavourite}>
      <FavIcon selected={selected} />
    </button>
  );
};

export default PhotoFavButton;