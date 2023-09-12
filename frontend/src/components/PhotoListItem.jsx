import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photoData, selected, toggleFavourite, photoId, toggleModal }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton selected={selected} toggleFavourite={() => toggleFavourite(photoId)} />
      <img className="photo-list__image" src={photoData.urls.regular} onClick={() => toggleModal(photoId)} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photoData.user.profile}></img>
        <div className="photo-list__user-info">
          {photoData.user.username}
          <div className="photo-list__user-location" >{photoData.location.city}, {photoData.location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;