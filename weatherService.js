const apiKey = "eaf0154c02178f584b44fd1f1ee8a077";

// https://api.openweathermap.org/data/2.5/weather?lat=57&lon=11&appid=eaf0154c02178f584b44fd1f1ee8a077

const cityLookupURL = cityName => {
  return `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;
}

const weatherLookupURL = (lat, lon) => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
}

function findWeather(coords, callback) {
  let url = weatherLookupURL(coords.lat, coords.lon);
  $.get(url, callback);
}

function findCityGeo(cityName, callback) {
  let url = cityLookupURL(cityName);
  $.get(url, callback);
}

function searchWeather(location, callback) {
  findCityGeo(location, data => {
    let coords = { lat: data[0].lat, lon: data[0].lon }

    findWeather(coords, data => {
      let weatherData = {
        location: location,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        temp: data.main.temp,
        feelTemp: data.main.feels_like,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        cloud: data.clouds.all,
        wind: data.wind.speed
      }

      callback(weatherData);
      //renderWeather(weatherData);
    });
  });
}

// callback måste alltid vara en funktion, det kan inte bara vara ett value




// const apiKey = "1df427fb3c0122f6e2aa38e7fc3f8586";

// // https://api.openweathermap.org/data/2.5/weather?lat=57&lon=11&appid=1df427fb3c0122f6e2aa38e7fc3f8586

// // http://api.openweathermap.org/geo/1.0/direct?q={city name}&appid=1df427fb3c0122f6e2aa38e7fc3f8586

// const cityLookupURL = cityName => {
//     return `http://api.openweathermap.org/geo/1.0/direct?q={city name}&appid=${apiKey}`;
// }

// function findCityGeo(cityName, callback) {
//     let url = cityLookupURL(cityName);
//     $.get(url, data => {
//         let coords = {lat: data[0].lat, lon: data[0].lon}
//         callback(coords);
        
//         console.log(coords);
//     });
//     console.log(cityName);
// }

// function searchWeather(location, callback) {
//     findCityGeo(location, coords => {
//         console.log("coords", coords);
//         //Anropa efter vädret på koordinaterna
//     });
// }