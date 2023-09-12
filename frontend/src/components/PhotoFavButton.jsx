import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ toggleFavourite, selected }) => {

  return (
    <div onClick={toggleFavourite} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>

  );
};

export default PhotoFavButton;