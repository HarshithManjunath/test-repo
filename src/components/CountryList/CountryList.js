import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllCountries } from '../../features/Countries/countrySlice';
import CountryCard from '../CountryCard/CountryCard'
import './CountryList.scss'

const CountryList = () => {
    const countries = useSelector(getAllCountries);
    const [data, SetData] = useState([]);
    const [searchKey, SetSearchKey] = useState("");

    // console.log(countries);
    useEffect(() => {
        SetData(
            countries.filter((ele) =>
            ele.name.toLowerCase().includes(searchKey.toLowerCase())
          )
        );
        // console.log(searchKey);
      }, [searchKey, countries]);

    return (
        <div className='country-wrapper'>
            <div className='search-wrapper'>
                <input type="search" id="search-form" value={searchKey} className="search-box" onChange={(e) => {
                      SetSearchKey(e.target.value);
                    }} placeholder="Search for countries"/>
            </div>
            <div className='country-list'>
                <div className='country-container'>
                    {data.length != 0 ? (
                        data.map((country,index) => <CountryCard key={index} data={country}/>)
                    ): ( <h2>One moment, fetching data</h2>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CountryList;