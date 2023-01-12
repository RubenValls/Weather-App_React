import React from 'react';
import { useState } from 'react';
import { saveInfo } from './jsFuntions/variables';

const Search = () => {
    
    const [search, setSearch] = useState("London");
    const [lat, setLat] = useState(51.5073219);
    const [lon, setLon] = useState(-0.1276474);
    
    const onChange = () => {
        setSearch(document.querySelector("#cityName").value);
        };
    
    const apiKey = "1d29ede4502de56f2857ec5afb7073d8";
    fetch("https://api.openweathermap.org/geo/1.0/direct?q="+search+"&limit="+1+"&appid="+apiKey)
        .then(response => response.json())
        .then(response => {
            setLat(response[0].lat);
            setLon(response[0].lon);
        })
        .catch(err => console.error(err));

    saveInfo(search, lat, lon);

    return (
        <div class="container text-center mt-3">
            <label for="cityName" class="form-label"><h3>City Name:</h3></label>
            <input type="text" class="form-control w-50 m-auto text-center" id="cityName" name="cityName" onKeyUp={onChange} required></input>
        </div>
    );
}

export default Search;