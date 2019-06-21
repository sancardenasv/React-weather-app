import { SET_FORECAST_DATA, GET_WEATHER_CITY, SET_WEATHER_CITY } from "./../actions";
import { createSelector } from "reselect";
import toPairs from "lodash.topairs";

export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA: {
            const {city, forecastData} = action.payload;
            return {...state, [city]: {...state[city], forecastData}};
        }
        case GET_WEATHER_CITY:{
            const city = action.payload;
            return {...state, [city]: {...state[city], weather: null}};
        }
        case SET_WEATHER_CITY:{
            const {city, weather} = action.payload;
            return {...state, [city]: {...state[city], weather}}
        }

        default:
            return state;
    }
}

export const getFoecastDataFromCities = createSelector(
    (state, city) => state[city] && state[city].forecastData,
    forecastData => forecastData
);

const objToArray = cities => (
    toPairs(cities).map(
        ([key, value]) => ({
            key,
            name: key,
            data: value.weather
        })
    )
);
export const getWeatherCities = createSelector(
    state => objToArray(state),
    cities => cities
);