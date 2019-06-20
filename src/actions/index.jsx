import {getUrlForecastByCity} from "./../services/getWeatherUrl"
import transformForecast from "./../services/transformForecast";

// Action Creator
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({
    type: SET_CITY,
    payload
});
const setForecastData = payload => ({
    type: SET_FORECAST_DATA,
    payload
});

export const setSelectedCity = payload => {
    return dispatch => {
        // Start request indicator in the state
        dispatch(setCity(payload));

        return fetch(getUrlForecastByCity(payload)).then(resolve => {
            return resolve.json();
        }).then(data => {
            const forecastData = transformForecast(data)
            console.log("forecastData", forecastData);
            // Modify the state with the request result
            dispatch(setForecastData({city: payload, forecastData}));
        });
    };
};