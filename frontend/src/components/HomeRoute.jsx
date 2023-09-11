import React from "react";
import PhotoList from "./PhotoList";
import TopNavigationBar from "./TopNavigationBar";

import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />
      <PhotoList photos={photos} />
    </div>
  );
};

export default HomeRoute;