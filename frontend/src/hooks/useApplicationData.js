import { useReducer, useEffect } from "react";

const ACTIONS = {
  TOGGLE_FAVOURITE: "TOGGLE_FAVOURITE",
  SELECT_PHOTO: "SELECT_PHOTO",
  CLOSE_MODAL: "CLOSE_MODAL",
  OPEN_MODAL: "OPEN_MODAL",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA"
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAVOURITE:
      const favourites = state.favourites.includes(action.id)
        ? state.favourites.filter((item) => item !== action.id)
        : [...state.favourites, action.id];
      return { ...state, favourites };
    case ACTIONS.SELECT_PHOTO:
      const photo = state.photoData.find(photo => photo.id === action.payload.photoId);
      return { ...state, selectedPhoto: photo, selectedPhotoId: action.payload.photoId };
    case ACTIONS.OPEN_MODAL:
      return { ...state, showModal: true };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, showModal: false };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    showModal: false,
    selectedPhotoId: null,
    favourites: [],
    selectedPhoto: null,
    photoData: [],
    topicData: []
  });

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(response => {
        if (!response.ok) { throw Error(response.statusText); }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new TypeError("Oops, we haven't got JSON!");
        }
        return response.json();
      })
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch(error => console.error('Error: ', error));
    fetch('http://localhost:8001/api/topics')
      .then(response => {
        if (!response.ok) { throw Error(response.statusText); }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new TypeError("Oops, we haven't got JSON!");
        }
        return response.json();
      }
      )
      .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch(error => console.error('Error: ', error));
  }, []);

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
    photos: state.photoData,
    topics: state.topicData,
    showModal: state.showModal,
    toggleModal,
    closeModal,
    selectedPhoto: state.selectedPhoto,
    toggleFavourite,
    isFavourite,
    favourites: state.favourites
  };
}