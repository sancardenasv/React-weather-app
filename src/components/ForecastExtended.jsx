import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastItem from "./ForecastItem";
import {getUrlForecastByCity} from "./../services/getWeatherUrl"
import transformForecast from "./../services/transformForecast";

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

    componentDidMount() {
        this.handleUpdateClick();
    }

    handleUpdateClick = () => {
        const {city} = this.props;
        fetch(getUrlForecastByCity(city)).then(resolve => {
            return resolve.json();
        }).then(data => {
            this.setState({
                forecastData: transformForecast(data)
            });
            console.log("forecastData", this.state.forecastData);
        });
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map( forecast =>
            <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}></ForecastItem>
        );
    }
    renderProgress() {
        return "Cargando pronóstico extendido...";
    }

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;

        return(
            <div className="row">
                <div className="col-12">
                    <h4>Pronostico extendido para {city}</h4>
                </div>
                <div className="col-12">
                    <div className="row">
                        { forecastData
                            ? this.renderForecastItemDays(forecastData)
                            : this.renderProgress()
                        }
                    </div>
                </div>
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}
export default ForecastExtended;