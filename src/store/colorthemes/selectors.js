import { createSelector } from "reselect";

import { getColorthemesEntities } from '../entities/selectors'

const selectColorthemesState = state => state.colorthemes;

const getColorthemes = createSelector(
  state => getColorthemesEntities(state) || {},
  colorthemes => colorthemes
);

const getLoading = createSelector(selectColorthemesState, state => {
  return state?.loading || false;
});

const getLoaded = createSelector(selectColorthemesState, state => {
  return state?.loaded || false;
});

const getError = createSelector(selectColorthemesState, state => {
  return state?.error || null;
});

export const makeGetColortheme = () =>
  createSelector(
    getColorthemesEntities,
    (_, colorthemeId) => colorthemeId,
    (entities, id) => entities[id]
  );

export { getColorthemes, getLoading, getError, getLoaded };
