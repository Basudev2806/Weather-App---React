import React from 'react';
import './App.css'
import CurrentLocation from "./currentLocation";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://medium.com/@basudev2806kar/create-weather-app-using-react-js-with-current-location-search-city-e3f5a3e3af6e">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.techbanda.com/">
          Techbanda
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;