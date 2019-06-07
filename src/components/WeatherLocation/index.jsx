import React, {Component} from "react";
import { PropTypes } from "prop-types";
import Location from "./Location";
import WeatherData from "./WeatherData";
import getUrlWeatherByCity from "./../../services/getUrlWeatherByCity"
import transformWeather from "./../../services/transformWeather";
import './styles.css';

class WeatherLocation extends Component {
    constructor(props) {
        super(props);
        const {city} = props;
        this.state = {
            city,
            data: null
        };
    }


    componentDidMount() {
        this.handleUpdateClick();
    }


    handleUpdateClick = () => {
        fetch(getUrlWeatherByCity(this.state.city)).then(resolve => {
            return resolve.json();
        }).then(data => {
            this.setState({
                city: data.name,
                data: transformWeather(data)
            });
        });
    }

    render() {
        const {onWeathetLocationClick} = this.props;
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <div className="row justify-content-center">
                    {
                        data ?
                            <WeatherData data={data} />
                        :
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                    }

                    <button onClick={this.handleUpdateClick} type="button" className="btn btn-info btn-sm">
                        <i className="fas fa-sync-alt"></i>
                    </button>
                    <button onClick={onWeathetLocationClick} type="button" className="btn btn-success btn-sm">
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        );
    }
    
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeathetLocationClick: PropTypes.func
}
export default WeatherLocation;