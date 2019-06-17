import React, { Component } from 'react';
import './App.css';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

const cities = [
    "Buenos Aires,ar",
    "Bogota,col",
    "Mexico,mex",
    "Washington,us",
    "Madrid,es",
    "Lima,pe"
];

class App extends Component {

    render() {
        return (
            <div className="">
                <nav className="col-12 navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">Weather App!!!</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    Home <span className="sr-only">(current)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 col-xl-5">
                            <LocationListContainer cities={cities}></LocationListContainer>
                        </div>
                        <div className="col-sm-12 col-lg-6 col-xl-7 mt-1 forecastExtendedCont">
                            <ForecastExtendedContainer></ForecastExtendedContainer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
