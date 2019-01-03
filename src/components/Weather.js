import React from 'react';

const Weather = props => (
    <div className="weather">
        {props.city && props.country && <p className="header1">Location: {props.city}, {props.country} </p>}
        {props.temperture && <p> Temperture: {props.temperture} </p>}
        {props.humidity && <p> Humidity: {props.humidity}</p>}
        {props.description && <p> Conditions: {props.description}</p>}
        {props.error && <p>{props.error}</p>}
    </div>
);

export default Weather;