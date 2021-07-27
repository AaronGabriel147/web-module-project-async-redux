import './App.css';
import React from 'react';
import Person from './components/Person';
import { reducer } from './reducers/reducer';

// import { applyMiddleware, createStore } from 'redux';
// import logger from 'redux-logger';


// const store = createStore(
//   reducer,
//   applyMiddleware(logger)
// );

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>hi</p>
        <Person />
      </header>
    </div>
  );
}

export default App;
