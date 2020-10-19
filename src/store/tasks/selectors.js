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

export { getTasks, getLoading, getError, getLoaded };
