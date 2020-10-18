import { ACTION_TYPES } from "./actions";

const initialState = {
  loading: false,
  loaded: false,
  error: false,
  panels: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_PANELS:
      return {
        ...state,
        loading: true
      };
    case ACTION_TYPES.GET_PANELS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        loaded: true
      };
    case ACTION_TYPES.GET_PANELS_SUCCESS:
      return {
        ...state,
        [action.meta.filter]: action.payload.data.map(d => d.id),
        loading: false,
        loaded: true
      };

    default:
      return state;
  }
};
