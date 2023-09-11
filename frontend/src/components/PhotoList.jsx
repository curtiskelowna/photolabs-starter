import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = ({ photos }) => {

  const list = photos.map((photoData) => {
    return <PhotoListItem key={photoData.id} photoData={photoData} />;
  });

  return (
    <ul className="photo-list">
      {list}
    </ul>
  );
};

export default PhotoList;