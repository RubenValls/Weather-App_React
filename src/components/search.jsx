import React from 'react';

const Search = () => {
    return (
        <div class="container text-center mt-3">
            <label for="cityName" class="form-label">City Name:</label>
            <input type="text" class="form-control w-50 m-auto" id="cityName" name="cityName" placeholder="..."></input>
            <button class="btn btn-outline-primary mt-3">Check Weather</button>
        </div>
    );
}

export default Search;
