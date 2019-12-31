import { SEARCH, ADD_MOVIE, EDIT, DELETE } from "../actionTypes";
import { moviesToDisplay } from "../../Components/Data";

const initialState = {
  moviesToDisplay: moviesToDisplay,
  rating: "",
  SearchText: "",
  isLoading: false
};

const index = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        moviesToDisplay: state.moviesToDisplay.concat(action.payload)
      };

    case EDIT:
      return {
        ...state,
        moviesToDisplay: state.moviesToDisplay.map(movie =>
          movie.id === action.payload.id
            ? {
                ...movie,
                name: action.payload.name,
                month:action.payload.month,
                date: action.payload.date,
                image: action.payload.image,
                rating: action.payload.rating
              }
            : movie
        )
      };

    case DELETE:
      return {
        ...state,
        moviesToDisplay: state.moviesToDisplay.filter(
          (el, i) => el.id !== action.payload
        )
      };

    case SEARCH:
      return {
        ...state,
        rating: action.payload.rating,
        SearchText: action.payload.SearchText,
        isLoading: action.payload.isLoading
      };

    default:
      return state;
  }
};

export default index;
