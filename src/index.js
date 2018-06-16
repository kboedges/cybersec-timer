import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./reducers";
import App from "./components/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Actions
import { getPasswords } from "./reducers/passwords/actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// Fetching Passwords
store.dispatch(getPasswords());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
