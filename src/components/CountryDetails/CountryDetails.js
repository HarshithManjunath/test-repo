import React, { useState, useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry, fetchCountry } from '../../features/Countries/countrySlice';
import axios from 'axios';
import './CountryDetails.scss'

const CountryDetails = () => {
    let country = useSelector(getCountry);
    // const dispatch = useDispatch();

    // console.log("deets",country);
    const [weather, SetWeather] = useState({});

    const getWeatherData = async () => {
        // setIsShown((current) => !current)
        // console.log(selectedCountry);
        const apiKey = "2ca0aad18afe1d85d679b037a7ca2be8";
        if(!country.latlng) {
            // return (<h2>Not able to retrieve details</h2>);
            return null
        }
        let lon = country.latlng[1];
        let lat = country.latlng[0];
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        // console.log(url);
        await axios.get(url).then((response) => {
          SetWeather(response.data);
        //   console.log("From deets compo",weather);
        });
        // console.log("weather",weather)
        return null;
    };

    // useEffect(() => {
    //     // dispatch(fetchCountry(country));
    //     console.log("deets",country);
    // },[country])
    
    if (!country) {
        return null;
    }
    return (
        <div className='details-container'>
            <div className='info-item'>
                <div className='details-container'>
                    <h3>Country: {country.name}</h3>
                    <h3>Capital City: {country.capital}</h3>
                    {!country.latlng ? (
                        <h3>No specific co-ordinates available</h3>
                    ) : (
                        <div>
                            <h3>Latitude: {country.latlng[0]}</h3>
                            <h3>Longitude: {country.latlng[1]}</h3>
                        </div>
                    )}
                </div>
                <div className='details-container'>
                    <img src={country.flag}/>
                </div>
            </div>
            <div className='weather'>
                <button onClick={() => getWeatherData()}>Show Weather</button>
                {Object.keys(weather).length !== 0 && (
                    <div className='weather-details-wrapper'>
                        <p>Status:{weather.cod}</p>
                        <p>Lat:{weather.coord.lat}</p>
                        <div className='weather-details'>
                            <h2>Weather details:</h2>
                            <p>Description: {weather.weather[0].description}</p>
                        </div>
                        <div className='weather-details'>
                            <h2>Main details:</h2>
                            <p>Min. Temp: {weather.main.temp_min} K</p>
                            <p>Max. Temp: {weather.main.temp_max} K</p>
                            <p>Pressure: {weather.main.pressure} hPa</p>
                        </div>
                        <div className='weather-details'>
                            <h2>Wind details:</h2>
                            <p>Speed: {weather.wind.speed}</p>
                            <p>Deg: {weather.wind.deg}</p>
                            <p>Gust: {weather.wind.gust}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CountryDetails;