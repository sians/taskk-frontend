import produce from "immer";
import normalize from "json-api-normalizer";

import { ACTION_TYPES } from "./actions";

import { ACTION_TYPES as PANEL_ACTION_TYPES } from "../panels/actions";
import { ACTION_TYPES as TASK_ACTION_TYPES } from "../tasks/actions";

const initialState = {
  panels: {},
  tasks: {},
  colorthemes: {}
};

const updateEntitiesData = (state, draft, entity, dataKey, data) => {
  const entityData = data[dataKey];

  if (entityData) {
    draft[entity] = {
      ...state[entity],
      ...entityData
    };
  }
};

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // UPDATE ENTITIES DATA
        case PANEL_ACTION_TYPES.GET_PANELS_SUCCESS:
        case TASK_ACTION_TYPES.UPDATE_TASK_SUCCESS: 
        const data = normalize(action.payload);

        updateEntitiesData(state, draft, "panels", "panel", data);
        updateEntitiesData(state, draft, "tasks", "task", data);
        updateEntitiesData(state, draft, "colorthemes", "colortheme", data);

        break;

      case ACTION_TYPES.RESET:
        draft.entities = initialState.entities;
        break;

      default:
        break;
    }
  });
};
