import React from 'react';
import { useState } from 'react';

const Search = () => {
    
    const [search, setSearch] = useState("London");
    const [lat, setLat] = useState(51.5073219);
    const [lon, setLon] = useState(-0.1276474);
    
    const onChange = (city) => {
        setSearch(city.currentTarget.value);
    };

    const inputValue = () => {
        const apiKey = "1d29ede4502de56f2857ec5afb7073d8";
        fetch("http://api.openweathermap.org/geo/1.0/direct?q="+search+"&limit="+1+"&appid="+apiKey)
            .then(response => response.json())
            .then(response => {
                setLat(response[0].lat);
                setLon(response[0].lon);
            })
            .catch(err => console.error(err));
    }

    return (
        <div class="container text-center mt-3">
            <label for="cityName" class="form-label"><h3>City Name:</h3></label>
            <input type="text" class="form-control w-50 m-auto" id="cityName" name="cityName" placeholder="London..." onChange={onChange} required></input>
            <button class="btn btn-outline-primary mt-3" id="citySearch" onClick={inputValue}>Check Weather</button>
            <div class="container text-center mt-3">
                <h4>Latitude:<h5>{lat}</h5>Longitude:<h5>{lon}</h5></h4>
            </div>
        </div>
    );
}

export default Search;