import { useState, useEffect } from "react";
import photos from 'mocks/photos';

export default function useApplicationData() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhotoId, setSelectedPhotoId] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const photo = photos.find(photo => photo.id === selectedPhotoId);
    setSelectedPhoto(photo);
  }, [selectedPhotoId]);

  const toggleFavourite = (id) => {
    setFavourites(prev => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
  };

  const isFavourite = (id) => {
    return favourites.includes(id);
  };

  const toggleModal = (photoId) => {
    setSelectedPhotoId(photoId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return {
    showModal,
    toggleModal,
    closeModal,
    selectedPhotoId,
    selectedPhoto,
    toggleFavourite,
    isFavourite,
    favourites,
    setSelectedPhotoId
  };
}