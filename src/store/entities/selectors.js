import { createSelector } from "reselect";

const selectEntitiesState = state => state?.entities;

export const getPanelsEntities = createSelector(
  selectEntitiesState,
  state => {
    return state?.panels || [];
  }
);

export const getTasksEntities = createSelector(
  selectEntitiesState,
  state => {
    return state?.tasks || [];
  }
);

export const getColorthemesEntities = createSelector(
  selectEntitiesState,
  state => {
    return state?.colorthemes || [];
  }
);
