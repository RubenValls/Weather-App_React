import React from 'react';
import { getInfo } from './jsFuntions/variables';
import { useState } from 'react';

const Weather = () => {
    let info = getInfo();
    
    const [city, setCity] = useState(info[0]);
    const [lattitude, setLattitude] = useState(info[1]);
    const [longitude, setLongitude] = useState(info[2]);
    const [temperature, setTemperature] = useState("??");
    const [weather, setWeather] = useState('??');
    const [weatherIcon, setWeatherIcon] = useState('03d');

    const apiK = "1d29ede4502de56f2857ec5afb7073d8";
    
        fetch("https://api.openweathermap.org/data/2.5/weather?lat="+ lattitude +"&lon="+ longitude +"&exclude=hourly,daily&appid="+ apiK)
            .then(response => response.json())
            .then(response => {
                setTemperature(Number(response.main.temp - 273).toFixed(2));
                setWeather(response.weather[0].main + " - " + response.weather[0].description);
                setWeatherIcon(response.weather[0].icon);
            })
            .catch(err => console.error(err));

    function changeValues (){
        info = getInfo();
        setLattitude(info[1]);
        setLongitude(info[2]);
        setCity(info[0]);

        const apiK = "1d29ede4502de56f2857ec5afb7073d8";
    
        fetch("https://api.openweathermap.org/data/2.5/weather?lat="+ lattitude +"&lon="+ longitude +"&exclude=hourly,daily&appid="+ apiK)
            .then(response => response.json())
            .then(response => {
                setTemperature(Number(response.main.temp - 273).toFixed(2));
                setWeather(response.weather[0].main + " - " + response.weather[0].description);
                setWeatherIcon(response.weather[0].icon);
            })
            .catch(err => console.error(err));
    }

    return (
        <div class="container mt-3 text-center">
            <div class="card bg-dark text-white">
                <div class="card-body">
                    <h2>{city.toUpperCase()}</h2>
                    <p class="text-muted mb-0">{weather.toUpperCase()}</p>
                    <div class="row">
                    <div class="col-6">
                        <img alt="weather" className='weather-icon' src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}/>
                    </div>
                    <div class="col-6">
                        <h2 class="display-2"><strong>{temperature}°C</strong></h2>
                    </div>
                    </div>
                    <button class="btn btn-outline-light mt-3" id="citySearch" onClick={changeValues}>Refresh card</button>
                </div>
            </div>
        </div>
    );
}



export default Weather;
