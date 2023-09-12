import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhotoId, setSelectedPhotoId] = useState(null);

  const toggleModal = (photoId) => {
    console.log("App photoId:", photoId);
    setSelectedPhotoId(photoId);
    setShowModal(true);
  };

  return (
    <div>
      <HomeRoute photos={photos} topics={topics} toggleModal={toggleModal} />
      {showModal && <PhotoDetailsModal showModal={showModal} setShowModal={setShowModal} photos={photos} selectedPhotoId={selectedPhotoId} />}
    </div>
  );
}

export default App;