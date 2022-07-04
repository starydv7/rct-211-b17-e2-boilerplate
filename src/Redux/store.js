// NOTE: use this store variable to create a store.
import { applyMiddleware, legacy_createStore,compose } from "redux";
import reducer from "./AppReducer/reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
