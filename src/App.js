import React, {useState, useEffect} from "react";
import './styles/App.css';
import WeatherView from "./components/WeatherView";
import AddingPart from "./components/AddingPart";

function App() {
    const [searchRequest, setSearchRequest] = useState('Kiev')
    const [weatherInfo, setWeatherInfo] = useState(null)
    const [click, setClick] = useState(true)


    useEffect(() => {

        fetch(`https://api.weatherapi.com/v1/forecast.json?key=c308218bd3bb429d940150155220807&q=${searchRequest}&days=3&aqi=no&alerts=no`)
            .then(res => res.ok ? res.json() : alert("Sorry, this city not found."))
            .then(data => {
                data ? setWeatherInfo(data) : setSearchRequest('')
            })

    },[click])


    function searchCity() {
        setClick(!click)
    }

    function setRequest(value) {
        setSearchRequest(value)
    }

    function showPage() {
        if(weatherInfo !== null) {
            return(
                <div className="App">
                    {console.log(weatherInfo)}
                    <WeatherView weatherInfo={weatherInfo}/>
                    <AddingPart
                        value={searchRequest}
                        search={searchCity}
                        setRequest={setRequest}
                        weatherInfo={weatherInfo}
                    />
                </div>
            );
        } else return <div className="App"></div>
    }

    return (
        showPage()
  );
}

export default App;
