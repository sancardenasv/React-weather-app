import React from 'react';
import { PropTypes } from "prop-types";
import './styles.css';

const Location = ({city}) => {
    return (
        <div className="locationCont">
            <h3 className="">{city}</h3>
        </div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired
};

export default Location;