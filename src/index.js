import React from 'react';    
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers'
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware (
    thunkMiddleware,
    loggerMiddleware
  )
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
