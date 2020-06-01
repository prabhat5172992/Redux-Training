import { createStore, compose, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

function configureStoreProd(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk, logger))
  );
  return store;
}

function configureStoreDev(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, logger))
  );
  return store;
}

const configureStore =
  process.env.NODE_ENV === "production"
    ? configureStoreProd
    : configureStoreDev;

export default configureStore();
