import { getUrlWeatherByCity, getUrlForecastByCity } from "./../services/getWeatherUrl"
import transformForecast from "./../services/transformForecast";
import transformWeather from "./../services/transformWeather";

// Action Creator
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = payload => ({
    type: SET_CITY,
    payload
});
const setForecastData = payload => ({
    type: SET_FORECAST_DATA,
    payload
});
const getWeatherCity = payload => ({
    type: GET_WEATHER_CITY,
    payload
});
const setWeatherCity = payload => ({
    type: SET_WEATHER_CITY,
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

export const setWeather = payload => {
    return dispatch => {
        payload.forEach(city => {
            getWeatherByCity(dispatch, city);
        });
    }
};

export const setWeatherByCity = payload => {
    return dispatch => {
        getWeatherByCity(dispatch, payload);
    }
};

function getWeatherByCity(dispatch, city) {
    dispatch(getWeatherCity(city));
    fetch(getUrlWeatherByCity(city)).then(resolve => {
        return resolve.json();
    }).then(data => {
        dispatch(setWeatherCity({
            city,
            weather: transformWeather(data)
        }));
    });
}
