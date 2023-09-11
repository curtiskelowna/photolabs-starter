import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  const list = props.photos.map((photo) => {
    const selected = props.isFavourite(photo.id);
    return <PhotoListItem key={photo.id} photoData={photo} selected={selected} onClick={() => props.toggleFavourite(photo.id) } />;
  });

  return (
    <ul className="photo-list">
      {list}
    </ul>
  );
};

export default PhotoList;