import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AllCountries from "./components/AllCountries/AllCountries";
import CountryInfo from "./components/CountryInfo/CountryInfo";


function App() {
  return (
    <Router>
      <div>
        <div className="header">
          <div className="container">
            <h5>Where in the world</h5>
           
          </div>
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<AllCountries />} />
            <Route path="/country/:countryName" element={<CountryInfo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

