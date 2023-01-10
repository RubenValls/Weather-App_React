const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));