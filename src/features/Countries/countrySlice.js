import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries : []
}

const countrySlice = createSlice({
    name:"countries",
    initialState,
    reducers:{
        addCountries:(state, { payload }) => {
            state.countries = payload;
        },
        fetchCountry:(state, { payload }) => {
            state.country = payload;
            // console.log("reducer", payload)
            // console.log("Reducer",state.country);
        }
    }
});

export const {addCountries} = countrySlice.actions;
export const {fetchCountry} = countrySlice.actions;
export default countrySlice.reducer;
export const getAllCountries = (state) => state.countries.countries;
export const getCountry = (state) => state.countries.country;