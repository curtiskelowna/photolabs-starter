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
      <FavIcon isFav={isFav} />
    </button>
  );
}

export default PhotoFavButton;