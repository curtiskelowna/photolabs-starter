import React from 'react';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

import '../styles/PhotoDetailsModal.scss';
import '../styles/PhotoListItem.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ showModal, closeModal, selectedPhoto, isFavourite, toggleFavourite, toggleModal }) => {
  if (!showModal || !selectedPhoto) return null;
  const selected = isFavourite(selectedPhoto.id);
  return (
    showModal ?
      (
        < div className="photo-details-modal" >
          <button className="photo-details-modal__close-button" onClick={() => closeModal()}>
            <img src={closeSymbol} alt="close symbol" />
          </button>
          <div className="photo-details-modal__images">
            <PhotoFavButton selected={selected} toggleFavourite={() => toggleFavourite(selectedPhoto.id)} />
            <img className="photo-details-modal__image" src={selectedPhoto.urls.full} alt={selectedPhoto.alt_description} />
            <div className="photo-details-modal__header">
              <div className="photo-list__user-details">
                <img className="photo-list__user-profile" src={selectedPhoto.user.profile} alt="User Profile"></img>
                <div className="photo-list__user-info">
                  {selectedPhoto.user.username}
                  <div className="photo-list__user-location" >{selectedPhoto?.location.city}, {selectedPhoto?.location.country}</div>
                </div>
              </div>
              <br></br>
              <h3>Similar Photos</h3>
              <div className="photo-details-modal__images">
                <PhotoList photos={Object.values(selectedPhoto.similar_photos)} isFavourite={isFavourite} toggleModal={toggleModal} toggleFavourite={toggleFavourite} />
              </div>
            </div>
          </div>
        </div>
      ) : null
  );
};

export default PhotoDetailsModal;

