import React from 'react';
import TopicList from './TopicList';

import '../styles/TopNavigationBar.scss';
import FavIcon from './FavIcon';

const TopNavigation = ({ topics, numFavourites, handleFetch }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} handleFetch={handleFetch} />
      <FavIcon selected={true} numFavourites={numFavourites} />
    </div>
  );
};

export default TopNavigation;