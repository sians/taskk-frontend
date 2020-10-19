import {
    configureStore,
    combineReducers,
    getDefaultMiddleware
  } from "@reduxjs/toolkit";
  
  import authReducer from "./auth";
  import entitiesReducer from './entities';
  import panelsReducer from './panels';
  
  const rootReducer = combineReducers({
    auth: authReducer,
    entities: entitiesReducer,
    panels: panelsReducer
  });
  
  const store = configureStore({
    reducer: rootReducer,
    ...getDefaultMiddleware
  });
  
  export default store;
  