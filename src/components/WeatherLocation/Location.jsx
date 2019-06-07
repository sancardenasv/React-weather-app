import React from 'react';
import { PropTypes } from "prop-types";
import './styles.css';

const Location = ({city}) => {
    return (
        <div className="row locationCont mb-2">
            <h3 className="col-12 card-title float-left">{city}</h3>
        </div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired
};

export default Location;