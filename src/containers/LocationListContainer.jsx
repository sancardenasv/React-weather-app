import React, { Component } from 'react';
import { connect } from "react-redux";
import { setSelectedCity } from "./../actions"
import PropTypes from 'prop-types';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    handleSelectionLocation = city => {
        this.props.dispatchSetCity(city);
    };

    render() {
        return (
            <LocationList cities={this.props.cities}
                onSelectedLocation={this.handleSelectionLocation}></LocationList>
        );
    }
}

LocationListContainer.propTypes = {

};

LocationListContainer.propTypes = {
    dispatchSetCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
}

// Inject properties
const mapDispatchToProps = dispatch => ({
    dispatchSetCity: value => dispatch(setSelectedCity(value))
});

export default connect(null, mapDispatchToProps)(LocationListContainer);