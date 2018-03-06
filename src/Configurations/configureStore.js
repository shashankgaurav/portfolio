import { createStore, compose } from "redux";

import { rootReducer } from "../Reducers/index";
import { middleware, runMiddleware } from "./configureMiddleware";

let store;

const enhancer = compose(
    // Middleware you want to use in development:
    middleware,
    // Required! Enable Redux DevTools with the monitors you chose
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

if(process.env.NODE_ENV === "production"){
     store = createStore(rootReducer, middleware);
} else {
     store = createStore(rootReducer, enhancer);
}
runMiddleware();

export default store;