import React from 'react';
// import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';

import './App.scss';

const App = () => {
  // const photoListItems = [1, 2, 3].map((number) => {
  //   return <PhotoListItem key={number} photoData={sampleDataForPhotoListItem} />;
  // });

  return (
    <div className="App">
      {/* {photoListItems} */}
      <PhotoList />
    </div>
  );
};

export default App;