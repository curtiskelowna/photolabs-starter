import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhotoId, setSelectedPhotoId] = useState(null);
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (id) => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter((item) => item !== id));
    }
    else {
      setFavourites([...favourites, id]);
    }
  };

  const isFavourite = (id) => {
    return favourites.includes(id);
  };

  const toggleModal = (photoId) => {
    setSelectedPhotoId(photoId);
    setShowModal(true);
  };

  const getSelectedPhoto = (photos, selectedPhotoId) => {
    return photos.find(photo => photo.id === selectedPhotoId);
  };
  let selectedPhoto = getSelectedPhoto(photos, selectedPhotoId);

  return (
    <div>
      <HomeRoute photos={photos} topics={topics} toggleModal={toggleModal} toggleFavourite={toggleFavourite} isFavourite={isFavourite} numFavourites={favourites.length} />
      {showModal && <PhotoDetailsModal showModal={showModal} setShowModal={setShowModal} selectedPhoto={selectedPhoto} isFavourite={isFavourite} toggleFavourite={toggleFavourite} toggleModal={toggleModal} />}
    </div>
  );
}

export default App;