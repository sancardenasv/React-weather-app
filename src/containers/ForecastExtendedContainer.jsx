import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCity, getFoecastDataFromCities } from "./../reducers";
import ForecastExtended from "./../components/ForecastExtended";

class ForecastExtendedContainer extends Component {
    render() {
        const {city, forecastData} = this.props;
        return(
            city
                ? <ForecastExtended city={city} forecastData={forecastData} />
                : <h3>Seleccione ciudad</h3>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string,
    forecastData: PropTypes.array
};
// Inject properties
const mapStateToProps = state => ({
    city: getCity(state),
    forecastData: getFoecastDataFromCities(state)
});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);