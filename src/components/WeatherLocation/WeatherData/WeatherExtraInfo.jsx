import React from "react";
import { PropTypes } from "prop-types";
import "./styles.css";

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="col-6">
        <div className="extaInfoText">{`Humedad: ${humidity}% `}</div>
        <div className="extaInfoText">{`Viento: ${wind}`}</div>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
}

export default WeatherExtraInfo;