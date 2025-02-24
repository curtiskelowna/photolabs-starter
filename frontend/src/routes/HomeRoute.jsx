import React from "react";
import PhotoList from "components/PhotoList";
import TopNavigationBar from "components/TopNavigationBar";

import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics, toggleModal, toggleFavourite, isFavourite, numFavourites, handleFetch }) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} numFavourites={numFavourites} handleFetch={handleFetch} />
      <PhotoList photos={photos} toggleFavourite={toggleFavourite} isFavourite={isFavourite} toggleModal={toggleModal} />
    </div>
  );
};

export default HomeRoute;
