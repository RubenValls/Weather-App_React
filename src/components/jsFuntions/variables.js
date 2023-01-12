let cityName = 'Example - London';
let lat = '51.5073219';
let lon = '-0.1276474';

export function saveInfo(city, lattitude, longitude){
    cityName = city;
    lat = lattitude;
    lon = longitude;

    const apiKey = "1d29ede4502de56f2857ec5afb7073d8";
        fetch("http://api.openweathermap.org/geo/1.0/direct?q="+cityName+"&limit="+1+"&appid="+apiKey)
            .then(response => response.json())
            .then(response => {
                lat= response[0].lat;
                lon= response[0].lon;
            })
            .catch(err => console.error(err));
}

export function getInfo(){
    let info = [cityName, lat, lon];
    return info;
}