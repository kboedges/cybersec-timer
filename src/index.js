import React from 'react';    
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, compose  } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers'
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
