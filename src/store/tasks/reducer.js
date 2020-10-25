import { ACTION_TYPES } from "./actions";

const initialState = {
  loading: false,
  loaded: false,
  error: false,
  tasks: [],
  updateTaskLoading: null,
  updateTaskSuccess: null,
  updateTaskError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    // I N D E X
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

    // U P D A T E
    case ACTION_TYPES.UPDATE_TASK:
      return {
        ...state,
        updateTaskLoading: true
      };
    case ACTION_TYPES.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        updateTaskLoading: false,
        updateTaskSuccess: true,
        updateTaskError:false
      };
    case ACTION_TYPES.UPDATE_TASK_FAIL:
      return {
        ...state,
        updateTaskLoading: false,
        updateTaskSuccess: false,
        updateTaskError: true
      }

    default:
      return state;
  }
};
