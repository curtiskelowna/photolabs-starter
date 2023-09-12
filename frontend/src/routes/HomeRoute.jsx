import React, { useState } from "react";
import PhotoList from "components/PhotoList";
import TopNavigationBar from "components/TopNavigationBar";

import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics, toggleModal, toggleFavourite, isFavourite, numFavourites }) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} numFavourites={numFavourites} />      <PhotoList photos={photos} toggleFavourite={toggleFavourite} isFavourite={isFavourite} toggleModal={toggleModal} />
    </div>
  );
};

export default HomeRoute;
