import React from "react";
import { PropTypes } from "prop-types";
import "./styles.css";

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weatherExtraInfoCont mt-2 col-5">
        <span className="extaInfoText float-center">{`Humedad: ${humidity}% `}</span>
        <span className="extaInfoText float-center">{`Viento: ${wind}`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
}

export default WeatherExtraInfo;