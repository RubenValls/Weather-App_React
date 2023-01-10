import React from 'react';
import { useState } from 'react';

const Search = () => {
    
    const [search, setSearch] = useState('No city');
    
    const onChange = (city) => {
        setSearch(city.currentTarget.value);
    };

    const inputValue = () => {
        window.alert(search)
    }

    return (
        <div class="container text-center mt-3">
            <label for="cityName" class="form-label">City Name:</label>
            <input type="text" class="form-control w-50 m-auto" id="cityName" name="cityName" placeholder="..." onChange={onChange} required></input>
            <button class="btn btn-outline-primary mt-3" id="citySearch" onClick={inputValue}>Check Weather</button>
        </div>
    );
}

export default Search;
