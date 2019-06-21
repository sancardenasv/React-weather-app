import React, { Component } from 'react';
import { connect } from "react-redux";
import { setWeatherByCity, setSelectedCity, setWeather } from "./../actions"
import { getWeatherCities } from "./../reducers";
import PropTypes from 'prop-types';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    componentDidMount() {
        this.props.setWeather(this.props.cities);
    }
    handleUpdateClick = city => {
        this.props.setWeatherByCity(city);
    }
    handleSelectionLocation = city => {
        this.props.dispatchSetCity(city);
    };

    render() {
        return (
            <LocationList cities={this.props.citiesWeather}
                onUpdateClick={this.handleUpdateClick}
                onSelectedLocation={this.handleSelectionLocation}></LocationList>
        );
    }
}

LocationListContainer.propTypes = {

};

LocationListContainer.propTypes = {
    dispatchSetCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array.isRequired
}

// Inject properties
const mapDispatchToProps = dispatch => ({
    setWeatherByCity: city => dispatch(setWeatherByCity(city)),
    dispatchSetCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
});

const mapStateToProps = state =>({
    citiesWeather: getWeatherCities(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);