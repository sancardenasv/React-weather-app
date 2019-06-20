import { combineReducers } from "redux";
import { cities, getFoecastDataFromCities as _getFoecastDataFromCities } from "./cities";
import { city } from "./city";

export default combineReducers({
    cities,
    city
});

export const getCity = state => state.city;
export const getFoecastDataFromCities = state =>
    (_getFoecastDataFromCities(state.cities, getCity(state)));