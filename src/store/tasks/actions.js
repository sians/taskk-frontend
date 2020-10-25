import tasksClient from '../../services/tasksService';

const REDUCER = 'tasks';
export const ACTION_TYPES = {
  GET_TASKS: `${REDUCER}/GET_TASKS`,
  GET_TASKS_SUCCESS: `${REDUCER}/GET_TASKS_SUCCESS`,
  GET_TASKS_FAIL: `${REDUCER}/GET_TASKS_FAIL`,
  UPDATE_TASK: `${REDUCER}/UPDATE_TASK`,
  UPDATE_TASK_SUCCESS: `${REDUCER}/UPDATE_TASK_SUCCESS`,
  UPDATE_TASK_FAIL: `${REDUCER}/UPDATE_TASK_FAIL`,  
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
        error: 'Error getting Tasks '
      });
    });
};

const updateTask = (dispatch, id, payload) => {
  dispatch({
    type: ACTION_TYPES.UPDATE_TASK
  });
  tasksClient
    .updateTask(id, payload)
    .then(res => {
      if (res && res.data) {
        dispatch({
          type: ACTION_TYPES.UPDATE_TASK_SUCCESS,
          payload: res.data
        });
      }
    })
    .catch(e => {
      dispatch({
        type: ACTION_TYPES.UPDATE_TASK_FAIL,
        error: 'Error updating task'
      })
    })
}

export { 
  getTasksListing,
  updateTask
};
