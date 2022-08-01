import React from "react";
import '../styles/DetailBlockInfo.css'
import SeparatorLine from "./UI/Line/SeparatorLine";

function DetailInfoBlock({weatherInfo}) {
    return(
        <div className="detailInfo">
            <p className="title">Weather details</p>
            <div className="parameter">
                <p>Cloudy</p>
                <div className="info">{weatherInfo.cloud}%</div>
            </div>
            <div className="parameter">
                <p>Humidity</p>
                <div className="info">{weatherInfo.humidity}%</div>
            </div>
            <div className="parameter">
                <p>Wind</p>
                <div className="info">{weatherInfo.wind_kph}km/h</div>
            </div>
            <div className="parameter">
                <p>UV index</p>
                <div className="info">{weatherInfo.uv}</div>
            </div>
        </div>
    );
}

export default DetailInfoBlock;