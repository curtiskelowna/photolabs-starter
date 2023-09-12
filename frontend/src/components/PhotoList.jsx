import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = ({ photos, isFavourite, toggleModal, toggleFavourite }) => {

  const list = photos.map((photo) => {
    console.log("PhotoList photoId:", photo.id);
    const selected = isFavourite(photo.id);
    return <PhotoListItem key={photo.id} photoId={photo.id} photoData={photo} selected={selected} toggleModal={toggleModal} toggleFavourite={toggleFavourite} />;
  });

  return (
    <ul className="photo-list">
      {list}
    </ul>
  );
};

export default PhotoList;