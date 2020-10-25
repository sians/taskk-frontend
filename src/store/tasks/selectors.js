import { createSelector } from "reselect";

import { getTasksEntities } from '../entities/selectors'

const selectTasksState = state => state.tasks;

const getTasks = createSelector(
  state => getTasksEntities(state) || {},
  tasks => tasks
);

const getLoading = createSelector(selectTasksState, state => {
  return state?.loading || false;
});

const getLoaded = createSelector(selectTasksState, state => {
  return state?.loaded || false;
});

const getError = createSelector(selectTasksState, state => {
  return state?.error || null;
});

export const makeGetTask = () =>
  createSelector(
    getTasksEntities,
    (_, taskId) => taskId,
    (entities, id) => entities[id]
  );

// UPDATE

const getUpdateTaskLoading = createSelector(
  selectTasksState,
  (state) => {
    return state.updateTaskLoading || null;
  }
);

const getUpdateTaskSuccess = createSelector(
  selectTasksState,
  (state) => {
    return state.updateTaskSuccess || null;
  }  
);

const getUpdateTaskError = createSelector(
  selectTasksState,
  (state) => {
    return state.updateTaskError || null;
  }  
)

export { 
  getTasks, 
  getLoading, 
  getError, 
  getLoaded,
  getUpdateTaskLoading,
  getUpdateTaskSuccess,
  getUpdateTaskError
};
