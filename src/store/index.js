import { createStore } from "redux";
import rootReducer from "./reducers";

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = createStore(rootReducer, preloadedState);

export default store;