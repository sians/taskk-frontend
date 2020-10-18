import { createSelector } from "reselect";

import { getPanelsEntities } from '../entities/selectors'

const selectPanelsState = state => state.panels;

const getPanels = createSelector(
  getPanelsEntities,
  panels => panels
);

const getLoading = createSelector(selectPanelsState, state => {
  return state.loading || false;
});

const getLoaded = createSelector(selectPanelsState, state => {
  return state.loaded || false;
});

const getError = createSelector(selectPanelsState, state => {
  return state.error || null;
});

export { getPanels, getLoading, getError, getLoaded };
