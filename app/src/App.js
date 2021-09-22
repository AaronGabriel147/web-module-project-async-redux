import React from 'react';
import { connect } from 'react-redux';
// import React, { useEffect, useState } from "react";
// import axios from 'axios';
import { fetchNasaAction } from './actions.js/index'
// import reducer from './reducers/reducer'



 

function App(props) {

  const data = props.state.nasa;  

console.log(props)
  const handleFetchNasa = (e) => {
    e.preventDefault();
    props.fetchNasaAction();
  }

  return (
    <div className="App">

      <button onClick={handleFetchNasa}>FETCH NASA API!</button>

      <h1>NASA Picture of the Day</h1>

      <img src={data.url} alt={data.title} />
      <h1>{data.title}</h1>
      <div className="cosmos-cta">
        <p className="apod-text">{data.explanation}</p>
      </div>
      <a className="hd-url" href={data.hdurl}>Full size image.</a>

    </div>
  );
}


const mapStateToProps = state => {
  return {
    state: state
  } 
};


export default connect(mapStateToProps, { fetchNasaAction })(App);

// export default App;
