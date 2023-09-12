import React, { useState } from "react";
import PhotoList from "components/PhotoList";
import TopNavigationBar from "components/TopNavigationBar";

import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics, toggleModal }) => {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (id) => {
    console.log(id);
    if (favourites.includes(id)) {
      setFavourites(favourites.filter((item) => item !== id));
    }
    else {
      setFavourites([...favourites, id]);
    }
    console.log(favourites);
  };

  const isFavourite = (id) => {
    return favourites.includes(id);
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} numFavourites={favourites.length} />      <PhotoList photos={photos} toggleFavourite={toggleFavourite} isFavourite={isFavourite} toggleModal={toggleModal} />
    </div>
  );
};

export default HomeRoute;
