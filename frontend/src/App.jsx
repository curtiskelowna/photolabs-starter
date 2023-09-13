import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';

function App() {
  const {
    showModal,
    toggleModal,
    selectedPhoto,
    toggleFavourite,
    isFavourite,
    favourites,
    closeModal
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