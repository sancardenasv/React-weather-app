import React from "react";
import PropTypes from "prop-types";
import ForecastItem from "./ForecastItem";

const renderForecastItemDays = (forecastData) => {
    return forecastData.map( forecast =>
        <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}></ForecastItem>
    );
}

const renderProgress = () => {
    return "Cargando pronóstico extendido...";
}

const ForecastExtended = ({city, forecastData}) => (
            <div className="row">
                <div className="col-12">
                    <h3>Pronostico extendido para {city}</h3>
                </div>
                <div className="col-12">
                    <div className="row mb-2">
                        { forecastData
                            ? renderForecastItemDays(forecastData)
                            : renderProgress()
                        }
                    </div>
                </div>
            </div>
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array
}

export default ForecastExtended;