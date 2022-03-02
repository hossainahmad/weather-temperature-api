// API Keys from Open Weather Map
const API_KEY = `45bbbfc389cc3461410236ec7de9e8e6`;

// Search a city and API Fetched

const weatherSearch = () => {
    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => showWeather(data))
}

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}

// Show Weather Function 

const showWeather = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('temp-condition', temperature.weather[0].main)

// Set Weather Condition Name

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}