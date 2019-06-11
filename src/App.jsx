import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

const cities = [
    "Buenos Aires,ar",
    "Bogota,col",
    "Mexico,mex",
    "Washington,us",
    "Madrid,es",
    "Lima,pe"
];

class App extends Component {
    constructor() {
        super();
        this.state = {
            city: null
        }
    }

    handleSelectionLocation = city => {
        this.setState({
            city
        });
    };

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
                <div class="container-fluid">
                    <div class="row">
                        <div className="col-sm-12 col-lg-6 col-xl-5">
                            <LocationList cities={cities}
                                onSelectedLocation={this.handleSelectionLocation}></LocationList>
                        </div>
                        <div className="col-sm-12 col-lg-6 col-xl-7 mt-1 forecastExtendedCont">
                            {this.state.city
                                ? <ForecastExtended city={this.state.city}></ForecastExtended>
                                : <h3>Seleccione ciudad</h3>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;