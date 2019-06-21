import React from "react";
import { PropTypes } from "prop-types";
import Location from "./Location";
import WeatherData from "./WeatherData";
import './styles.css';

const WeatherLocation = ({handleUpdateClick, onWeathetLocationClick, city, data}) => (
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
                    <button onClick={handleUpdateClick} type="button" className="col-1 btn btn-info btn-sm">
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

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    handleUpdateClick: PropTypes.func.isRequired,
    onWeathetLocationClick: PropTypes.func.isRequired
}
export default WeatherLocation;