import { combineReducers } from "redux";
import { createSelector } from "reselect";
import {
    cities,
    getFoecastDataFromCities as _getFoecastDataFromCities,
    getWeatherCities as _getWeatherCities
} from "./cities";
import { city } from "./city";

export default combineReducers({
    cities,
    city
});

export const getCity = createSelector(state => state.city, city => city);
export const getFoecastDataFromCities = createSelector(
    state => state.cities,
    getCity,
    (cities, city) => _getFoecastDataFromCities(cities, city)
);
export const getWeatherCities = createSelector(
    state => state.cities,
    cities => _getWeatherCities(cities)
);