import { createStore, combineReducers } from "redux";
// import mapReducer from "../features/map/reducer";

const rootReducer = combineReducers({
  // map: mapReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
