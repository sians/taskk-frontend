import tasksClient from "../../services/tasksService";

const REDUCER = "tasks";
export const ACTION_TYPES = {
  GET_TASKS: `${REDUCER}/GET_TASKS`,
  GET_TASKS_SUCCESS: `${REDUCER}/GET_TASKS_SUCCESS`,
  GET_TASKS_FAIL: `${REDUCER}/GET_TASKS_FAIL`,
};

const getTasksListing = (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_TASKS
  });
  tasksClient
    .getTasks()
    .then(res => {
      if (res && res.data) {
        dispatch({
          type: ACTION_TYPES.GET_TASKS_SUCCESS,
          payload: res.data,
        });
      }
    })
    .catch(e => {
      dispatch({
        type: ACTION_TYPES.GET_TASKS_FAIL,
        error: "Error getting Tasks "
      });
    });
};

export { getTasksListing };
