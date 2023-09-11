import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {

  return (
    <button className="photo-list__fav-icon" onClick={props.onClick}>
      <FavIcon selected={props.selected} />
    </button>
  );
};

export default PhotoFavButton;