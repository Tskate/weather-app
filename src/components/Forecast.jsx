import React from "react";
import '../styles/Forecast.css'

function Forecast({weatherInfo, day}) {
    const degreeSymbol = '\u00B0'
    return (
        <div className="forecastBlock">
            <div className="icon">
                <img src={weatherInfo.condition.icon} alt="weather-icon"/>
            </div>
            <p className="weather">
                {weatherInfo.condition.text}
            </p>
            <p className="day">
                {day}
            </p>
            <h4 className="temperature">
                {`${Math.round(weatherInfo.mintemp_c)}${degreeSymbol}  - ${Math.round(weatherInfo.maxtemp_c)}${degreeSymbol}`}
            </h4>
        </div>
    );
}

export default Forecast;