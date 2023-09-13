import { useReducer } from "react";
import photos from 'mocks/photos';

const ACTIONS = {
  TOGGLE_FAVOURITE: "TOGGLE_FAVOURITE",
  SELECT_PHOTO: "SELECT_PHOTO",
  CLOSE_MODAL: "CLOSE_MODAL",
  OPEN_MODAL: "OPEN_MODAL",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAVOURITE:
      const favourites = state.favourites.includes(action.id)
        ? state.favourites.filter((item) => item !== action.id)
        : [...state.favourites, action.id];
      return { ...state, favourites };
    case ACTIONS.SELECT_PHOTO:
      const photo = photos.find(photo => photo.id === action.payload.photoId);
      return { ...state, selectedPhoto: photo, selectedPhotoId: action.payload.photoId };
    case ACTIONS.OPEN_MODAL:
      return { ...state, showModal: true };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, showModal: false }; default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    showModal: false,
    selectedPhotoId: null,
    favourites: [],
    selectedPhoto: null,
  });

  const toggleFavourite = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVOURITE, id });
  };

  const isFavourite = (id) => {
    return state.favourites.includes(id);
  };

  const toggleModal = (photoId) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photoId } });
    dispatch({ type: ACTIONS.OPEN_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  return {
    showModal: state.showModal,
    toggleModal,
    closeModal,
    selectedPhoto: state.selectedPhoto,
    toggleFavourite,
    isFavourite,
    favourites: state.favourites
  };
}