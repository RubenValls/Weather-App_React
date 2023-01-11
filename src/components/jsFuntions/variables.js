let cityName = 'Example - London';
let lat = '51.5073219';
let lon = '-0.1276474';

export function saveInfo(city, lattitude, longitude){
    cityName = city;
    lat = lattitude;
    lon = longitude
}

export function getInfo(){
    let info = [cityName, lat, lon];
    return info;
}