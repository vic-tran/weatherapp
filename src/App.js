import React, {useState} from 'react';
import axios from 'axios';


function App() {

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=4c292201046ae4fb1c8afc4eb45c9aba`
  
  return (
    <div className="app">
      <div className="container">

        <div className="top">
          <div className="location">
          <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>60°F</h1>
          </div>
          <div className="description">
            <p>Cloudly</p>
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            <p>65°F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            12 MPH
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
