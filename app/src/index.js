import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducers/reducer';



// import { applyMiddleware, createStore } from 'redux';
// import logger from 'redux-logger';


// const store = createStore(
//   reducer,
//   applyMiddleware(logger)
// );



const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

