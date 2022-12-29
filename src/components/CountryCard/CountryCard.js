import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"
import './CountryCard.scss'

import { fetchCountry } from '../../features/Countries/countrySlice';

const CountryCard = (props) => {
  const dispatch = useDispatch();   
    const navigate = useNavigate();
    const { data } = props;
    function handleClick(data){
        dispatch(fetchCountry(data));
        console.log("clicked on ",data.name);
        navigate("/countryDetails/");
        // SetSelectedCountry(country);
    }
    
    return (
        <div className='card-item'>
            {/* <Link to={`/countryDetails/`}> */}
                <div className='card-inner' onClick={() => handleClick(data)}>
                    <div className='card-top'>
                        <img src={data.flag}/>
                    </div>
                    <div className='card-bottom'>
                        <div className='card-info'>
                            <h3>{data.name}</h3>
                            <p>{data.capital}</p>
                        </div>
                    </div>
                </div>
            {/* </Link> */}
        </div>
    );
};

export default CountryCard;