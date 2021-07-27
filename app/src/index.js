import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { reducer } from './reducers/reducer';
import Person from './components/Person';


const store = createStore(reducer);


ReactDOM.render(
  <Povider store={store} >
    <App />
  </Povider>,
  document.getElementById('root')
);

