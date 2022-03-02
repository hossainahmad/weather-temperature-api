const API_KEY = `45bbbfc389cc3461410236ec7de9e8e6`;

const weatherSearch = () => {
    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}
