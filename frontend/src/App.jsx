import React from 'react';
import HomeRoute from './components/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

import './App.scss';

function App() {
  return (
    <HomeRoute photos={photos} topics={topics} />
  );
}

export default App;