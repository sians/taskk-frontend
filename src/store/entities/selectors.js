import { createSelector } from "reselect";

const selectEntitiesState = state => state?.entities;

export const getPanelsEntities = createSelector(
  selectEntitiesState,
  state => {
    return state?.Panels || [];
  }
);

export const getTasksEntities = createSelector(
  selectEntitiesState,
  state => {
    return state?.tasks || [];
  }
);
