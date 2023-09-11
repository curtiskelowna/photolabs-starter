import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isFav, setIsFav] = useState(false);

  const toggleFav = useCallback(() => {
    setIsFav((prevIsFav) => !prevIsFav);
  }, []);

  return (
    <button className="photo-list__fav-icon" onClick={toggleFav}>
      <FavIcon selected={isFav} />
    </button>
  );
}

export default PhotoFavButton;

// const PhotoFavButton = (props) => {
//   const [isFav, setIsFav] = useState(false);
//   const onFavButtonClick = useCallback(() => {
//     setIsFav(!isFav);
//   }, [isFav]);

//   return (
//     <button className="photo-list__fav-icon" onClick={onFavButtonClick}>
//       <FavIcon selected={isFav} />
//     </button>
//   );
// };