import {configureStore} from "@reduxjs/toolkit";
import countriesReducer from './Countries/countrySlice';

export const store = configureStore({
    reducer: {
        countries:countriesReducer
    },
});