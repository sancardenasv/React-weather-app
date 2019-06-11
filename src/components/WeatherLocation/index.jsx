import React, {Component} from "react";
import { PropTypes } from "prop-types";
import Location from "./Location";
import WeatherData from "./WeatherData";
import {getUrlWeatherByCity} from "./../../services/getWeatherUrl";
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
            <>
                <div className="row">
                    <div className="col-12">
                        <Location city={city}></Location>
                    </div>
                </div>
                {
                    data ?
                        <div className="row">
                            <div className="col-9">
                                <WeatherData data={data} />
                            </div>
                            <button onClick={this.handleUpdateClick} type="button" className="col-1 btn btn-info btn-sm">
                                <i className="fas fa-sync-alt"></i>
                            </button>
                            <button onClick={onWeathetLocationClick} type="button" className="col-1 btn btn-success btn-sm">
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                        :
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                }
            </>
        );
    }
    
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeathetLocationClick: PropTypes.func
}
export default WeatherLocation;