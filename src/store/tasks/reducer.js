import { ACTION_TYPES } from "./actions";

const initialState = {
  loading: false,
  loaded: false,
  error: false,
  tasks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_TASKS:
      return {
        ...state,
        loading: true
      };
    case ACTION_TYPES.GET_TASKS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        loaded: true
      };
    case ACTION_TYPES.GET_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload.data.map(d => d.id),
        loading: false,
        loaded: true
      };

    default:
      return state;
  }
};
