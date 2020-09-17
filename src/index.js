import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import Reducers from './reducers';
import { Provider } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';
import './index.scss';

const reducers = combineReducers(Reducers);
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
