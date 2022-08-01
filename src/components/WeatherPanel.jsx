import React from "react";
import '../styles/WeatherPanel.css'

function WeatherPanel({weatherInfo}) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dt = new Date(weatherInfo.location.localtime)
    return(
        <div className="weatherPanel">
            <h1 className="numberOfDegree">
                {`${Math.round(weatherInfo.current.temp_c)}\u00B0`}
            </h1>
            <div className="locAndAtmContainer">
                <div className="location">
                    {weatherInfo.location.name}
                    <div className="dateNow">
                        {`${dt.getHours()}:${dt.getMinutes() < 10 ? '0'+dt.getMinutes() : dt.getMinutes()} - ${days[dt.getDay()]}, ${months[dt.getMonth()]} '${dt.getDate()}`}
                    </div>
                </div>
                <div className="atmosphere">
                    <img src={weatherInfo.current.condition.icon} alt="weather-icon"/>
                    <div className="weatherType">
                        {weatherInfo.current.condition.text}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherPanel;