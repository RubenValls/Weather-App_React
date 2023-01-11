import React from 'react';
import { getInfo } from './jsFuntions/variables';

const Weather = () => {
    let info = getInfo();
    console.log(info);
    return (
        <div class="container">
            <div class="weather">
                <h5>Hola:</h5>
            </div>
        </div>
    );
}

export default Weather;
