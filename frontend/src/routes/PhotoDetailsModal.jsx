import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ showModal, setShowModal }) => {
  return (
    showModal ?
      (
        < div className="photo-details-modal" >
          <button className="photo-details-modal__close-button" onClick={() => { setShowModal(false); }}>
            <img src={closeSymbol} alt="close symbol" />
          </button>
        </div >
      ) : null
  );
};

export default PhotoDetailsModal;
