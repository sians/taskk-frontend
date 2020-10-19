import { ACTION_TYPES } from "./actions";

const initialState = {
  loading: false,
  loaded: false,
  error: false,
  colorthemes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_COLORTHEMES:
      return {
        ...state,
        loading: true
      };
    case ACTION_TYPES.GET_COLORTHEMES_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        loaded: true
      };
    case ACTION_TYPES.GET_COLORTHEMES_SUCCESS:
      return {
        ...state,
        colorthemes: action.payload.data.map(d => d.id),
        loading: false,
        loaded: true
      };

    default:
      return state;
  }
};
