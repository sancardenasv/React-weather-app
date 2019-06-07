import React from 'react';
import Weathericons from 'react-weathericons';
import { PropTypes } from "prop-types";
import { CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE } from "./../../../constants/weathers";
import "./styles.css";

const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "thunderstorm",
    [DRIZZLE]: "day-showers"
}

const WeatherTemparature = ({temperature, weatherState}) => (
    <>
        <div className="col-3 ml-2 mt-2">
            {getWatherIcon(weatherState)}
        </div>
        <div className="col-3 ml-2">
            <span className="temperature">{temperature}</span>
            <span className="temperatureType">C°</span>
        </div>
    </>
);

WeatherTemparature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

const getWatherIcon = (weatherState) => {
    const iconName = icons[weatherState];
    const iconSize = "4x";
    if (iconName) {
        return <Weathericons className="wicon" name={iconName} size={iconSize}/>
    } else {
        return <Weathericons className="wicon" name="day-sunny" size={iconSize}/>
    }
}

export default WeatherTemparature;