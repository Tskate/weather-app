import React from "react";
import '../styles/AddingPart.css'
import SeparatorLine from "./UI/Line/SeparatorLine";
import SearchBar from "./SearchBar";
import DetailInfoBlock from "./DetailInfoBlock";
import Forecast from "./Forecast";

function AddingPart({value, search, setRequest, weatherInfo}) {
    const days = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fry', 'Sat']
    return(
        <div className="container">
            <SearchBar value={value} search={search} setRequest={setRequest}/>
            <DetailInfoBlock weatherInfo={weatherInfo.current}/>
            <SeparatorLine />
            <div className="forecast">
                <p>Next days</p>
                <div className="threeDayForecast">
                    <Forecast weatherInfo={weatherInfo.forecast.forecastday[0].day}
                              day={'Today'}/>
                    <Forecast weatherInfo={weatherInfo.forecast.forecastday[1].day}
                              day={days[new Date(weatherInfo.forecast.forecastday[1].date).getDay()]}/>
                    <Forecast weatherInfo={weatherInfo.forecast.forecastday[2].day}
                              day={days[new Date(weatherInfo.forecast.forecastday[2].date).getDay()]}/>
                </div>
            </div>
        </div>
    );
}

export default AddingPart;