import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
];

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {sampleDataForPhotoList.map((photoData) => {
        return (
          <li key={photoData.id} className="photo-list__item">
            <img
              className="photo-list__image"
              src={photoData.urls.regular}
              alt=""
            />
            <div className="photo-list__user-details">
              <img
                className="photo-list__user-profile"
                src={photoData.user.profile}
                alt=""
              />
              <div className="photo-list__user-info">
                {photoData.user.username}
                <div className="photo-list__user-location">
                  {photoData.location.city}, {photoData.location.country}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default PhotoList;

// const photoListItems = sampleDataForPhotoList.map((photoData) => {
//   return <PhotoListItem key={photoData.id} photoData={photoData} />;
// });

// return <div className="photo-list">{photoListItems}</div>;
// };