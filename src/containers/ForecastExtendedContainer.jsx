import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastExtended from "./../components/ForecastExtended";
import { connect } from "react-redux";

class ForecastExtendedContainer extends Component {
    render() {
        return(
            this.props.city
                ? <ForecastExtended city={this.props.city}></ForecastExtended>
                : <h3>Seleccione ciudad</h3>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired
};
// Inject properties
const mapStateToProps = state => ({
    city: state.city
});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);