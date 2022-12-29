import React, { useEffect } from 'react';
import CountryList from '../CountryList/CountryList';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { addCountries } from '../../features/Countries/countrySlice';

const Home = () => {
    // const dispatch = useDispatch();
    
    // useEffect(() => {
    //     const fetchCountries = async () => {
    //         const response = await axios.get("https://restcountries.com/v2/all")
    //         .catch((err) => {
    //             console.log(err);
    //         });
    //         // console.log("Fetched response ", response);
    //         dispatch(addCountries(response.data));
    //     };
    //     fetchCountries();
    // },[]);
    
    return (
        <div>
            <div className='flag-img'></div>
            <CountryList/>
        </div>
    );
};

export default Home;