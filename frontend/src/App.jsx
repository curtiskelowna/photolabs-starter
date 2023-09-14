import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';

function App() {
  const {
    showModal,
    toggleModal,
    closeModal,
    selectedPhoto,
    toggleFavourite,
    isFavourite,
    favourites,
    photos,
    topics
  } = useApplicationData();
  return (
    <div>
      <HomeRoute
        photos={photos}
        topics={topics}
        toggleModal={toggleModal}
        toggleFavourite={toggleFavourite}
        isFavourite={isFavourite}
        numFavourites={favourites.length}
      />
      {showModal &&
        <PhotoDetailsModal
          showModal={showModal}
          closeModal={closeModal}
          selectedPhoto={selectedPhoto}
          isFavourite={isFavourite}
          toggleFavourite={toggleFavourite}
          toggleModal={toggleModal}
        />
      }
    </div>
  );
}

export default App;