import React from "react";
import '../styles/WeatherView.css'
import WeatherPanel from "./WeatherPanel";

function WeatherView({weatherInfo}) {
    return(
        <div className="containerWeather">
            <h2 className="name">the.weather</h2>
            <WeatherPanel weatherInfo={weatherInfo}/>
        </div>
    );
}

export default WeatherView;