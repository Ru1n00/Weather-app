let weatherReport;

// let weatherApi = "http://api.openweathermap.org/geo/1.0/direct?q=dhaka,state code,bd&limit=5&appid=769f096cebb7779b7a20979cb40c0cbc";
// let a = "https://api.openweathermap.org/data/3.0/onecall?lat=23.7644025&lon=90.389015&appid=769f096cebb7779b7a20979cb40c0cbc";
// let weatherApi = "https://api.openweathermap.org/data/2.5/weather?lat=23.7644025&lon=90.389015&appid=769f096cebb7779b7a20979cb40c0cbc&units=imperial";
let weatherApi = "https://api.weatherapi.com/v1/current.json?key=a0ec2279c37746779d4114837231708&q=dhaka&aqi=yes";

fetch(weatherApi)
    .then(response => response.json())
    .then(data => {
        weatherReport = data;
        console.log(weatherReport);
        displayWeather();
    });


function displayWeather() {
    // variables
    // let icon = weatherReport.weather[0].icon;
    let weatherIcon = weatherReport.current.condition.icon; 
    // let weatherDesc = weatherReport.weather[0].description;
    let weatherDesc = weatherReport.current.condition.text;
    let temp = weatherReport.current.temp_c;
    let feelsLike = weatherReport.current.feelslike_c;
    let humidity = weatherReport.current.humidity;
    let visibility = weatherReport.current.vis_km;
    let windSpeed = weatherReport.current.wind_kph;
    let windDirection = weatherReport.current.wind_dir;
    let uv = weatherReport.current.uv;
    let pressure = weatherReport.current.pressure_mb;
    let precipitation = weatherReport.current.precip_mm;


    // elements
    let weatherIconElement = document.getElementsByClassName("weather-icon")[0];
    let weatherDescElement = document.getElementsByClassName("weather-desc")[0];
    let tempElement = document.getElementsByClassName("temp")[0];
    let feelsLikeElement = document.getElementsByClassName("feels-like")[0];
    let humidityElement = document.getElementsByClassName("humidity")[0];
    let visibilityElement = document.getElementsByClassName("visibility")[0];
    let windSpeedElement = document.getElementsByClassName("wind-speed")[0];
    let uvElement = document.getElementsByClassName("uv")[0];
    let pressureElement = document.getElementsByClassName("pressure")[0];
    let precipitationElement = document.getElementsByClassName("precipitation")[0];

    weatherIconElement.src = "https:" + weatherIcon;
    weatherDescElement.innerHTML = weatherDesc;
    tempElement.innerHTML = temp + "°C";
    feelsLikeElement.innerHTML = feelsLike + "°C";
    humidityElement.innerHTML = humidity + "%";
    visibilityElement.innerHTML = visibility + " km";
    windSpeedElement.innerHTML = windSpeed + " kph" + " " + windDirection;
    uvElement.innerHTML = uv;
    pressureElement.innerHTML = pressure + " mb";
    precipitationElement.innerHTML = precipitation + " mm";

    console.log(weatherIconElement);
};
