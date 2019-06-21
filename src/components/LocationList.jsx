import React from "react";
import PropTypes from 'prop-types';
import WeatherLocation from "./WeatherLocation";
import "./styles.css";

const LocationList = ({cities, onUpdateClick, onSelectedLocation}) => {
    const handleUpdateClick = city => {
        onUpdateClick(city);
    }
    const handleWeatherLocationClick = city => {
        onSelectedLocation(city);
    };
    const loadCityList = cities => (
        cities.map(city => (
            <WeatherLocation
                key={city.key} city={city.name}
                handleUpdateClick={() => handleUpdateClick(city.name)}
                onWeathetLocationClick={() => handleWeatherLocationClick(city.name)}
                data={city.data} />
        ))
    );

    return (
    <div className="locationList">
        {loadCityList(cities)}
    </div>)
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired,
    onUpdateClick: PropTypes.func.isRequired
}

export default LocationList;
