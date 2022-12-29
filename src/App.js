import React ,{ useEffect }from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.scss';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import CountryDetails from './components/CountryDetails/CountryDetails'

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCountries } from './features/Countries/countrySlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      const fetchCountries = async () => {
          const response = await axios.get("https://restcountries.com/v2/all")
          .catch((err) => {
              console.log(err);
          });
          console.log("Fetched response ", response);
          dispatch(addCountries(response.data));
      };
      fetchCountries();
  },[]);
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/countryDetails/" element={<CountryDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
