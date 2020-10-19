import {
    configureStore,
    combineReducers,
    getDefaultMiddleware
  } from "@reduxjs/toolkit";
  
  import authReducer from "./auth";
  import entitiesReducer from './entities';
  import panelsReducer from './panels';
  import tasksReducer from './tasks';
  import colorthemesReducer from './colorthemes';
  
  const rootReducer = combineReducers({
    auth: authReducer,
    entities: entitiesReducer,
    panels: panelsReducer,
    tasks: tasksReducer,
    colorthemes: colorthemesReducer,
  });
  
  const store = configureStore({
    reducer: rootReducer,
    ...getDefaultMiddleware
  });
  
  export default store;
  