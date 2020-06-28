import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import { fetchBlog } from './containers/Blog/saga';

import './index.css';
import App from './containers/App';
import aboutReducer from './containers/About/reducer';
import blogReducer from './containers/Blog/reducer';
import faqReducer from './containers/FAQ/reducer';

// import store from './containers/store';
// import * as serviceWorker from './serviceWorker';
const rootReducer = combineReducers({
  about: aboutReducer,
  blogs: blogReducer,
  faq: faqReducer,
});

//connect sagas
const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(fetchBlog);

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
