import React, { Component } from "react";
import PropTypes from "prop-types";
import {  } from "./ForecastItem";
import ForecastItem from "./ForecastItem";

// const days = [
//     'Lunes',
//     'Martes',
//     'Miércoles',
//     'Jueves',
//     'Viernes'
// ];

// const data = {
//     temperature: 10,
//     humidity: 11,
//     weatherState: 'normal',
//     wind: '5.6 m/s'
// }

class ForecastExtended extends Component {
    constructor() {
        super();
        this.state = {
            forecastData: null
        };
    }
    renderForecastItemDays() {
        return "Rendet Items";
        // return days.map( day => <ForecastItem key={day} weekDay={day} hour={10} data={data}></ForecastItem>);
    }
    renderProgress() {
        return "Cargando pronóstico extendido...";
    }

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;

        return(
            <div className="row">
                <h4>Pronostico extendido para {city}</h4>
                { forecastData
                    ? this.renderForecastItemDays()
                    : this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}
export default ForecastExtended;