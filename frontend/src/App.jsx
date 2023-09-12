import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <HomeRoute photos={photos} topics={topics} toggleModal={toggleModal} />
      {showModal && <PhotoDetailsModal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}

export default App;