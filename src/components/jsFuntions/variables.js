let cityName = 'London';
let lat = '51.5073219';
let lon = '-0.1276474';

export function saveInfo(city, lattitude, longitude){
    cityName = city;
    lat = lattitude;
    lon = longitude
    console.log(cityName + lat + lon);
}

export function getInfo(){
    let info = [cityName, lat, lon];
    return info;
}