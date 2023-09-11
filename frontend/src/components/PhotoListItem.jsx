import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const photoData = props.photoData;
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={photoData.urls.regular} />
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