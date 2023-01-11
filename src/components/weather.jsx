import React from 'react';
import { getInfo } from './jsFuntions/variables';
import { useState } from 'react';

const Weather = () => {
    let info = getInfo();
    
    const [city, setCity] = useState(info[0]);
    const [lattitude, setLattitude] = useState(info[1]);
    const [longitude, setLongitude] = useState(info[2]);

    return (
        <div class="container">
            <div class="weather">
                <h5>Hola: {city}</h5>
            </div>
        </div>
    );
}

export default Weather;
