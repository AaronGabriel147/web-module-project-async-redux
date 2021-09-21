import './App.css';
import React from 'react';
import Cosmos from './components/Cosmos';
// import Person from './components/Person';




function App() {

  return (
    <div className="App">
      <header>
        <h1>NASA Picture of the Day</h1>
        <Cosmos />
      </header>
    </div>
  );
}

export default App;
