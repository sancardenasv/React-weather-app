import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from "./WeatherTemperature";
import WeatherExtraInfo from "./WeatherExtraInfo";
import "./styles.css";

const WeatherData = ({data: {temperature, weatherState, humidity, wind}}) => (
    <div className="weatherDataCont col-9">
        <div className="row">
            <WeatherTemperature temperature={temperature} weatherState={weatherState}></WeatherTemperature>
            <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
        </div>
    </div>
);

WeatherData.prototypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
}

export default WeatherData;