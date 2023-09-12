import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <HomeRoute photos={photos} topics={topics} toggleModal={setShowModal} />
      {showModal && <PhotoDetailsModal />}
    </div>
  );
}

export default App;