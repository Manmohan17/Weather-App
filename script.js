document.getElementById('search-btn').addEventListener('click', function () {
    const city = document.getElementById('city-input').value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

function fetchWeather(city) {
    const apiKey = "e6f7a07330ead5a715a2d423528f9c06";
    const apiUrl = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error("City not found");
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => {
            console.error('Error:', error);
            alert('City not found. Try again.');
        });
}

function displayWeather(data) {
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('temperature').textContent = ${data.main.temp}°C;
    document.getElementById('weather-condition').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = ${data.main.humidity}%;
    document.getElementById('wind-speed').textContent = ${data.wind.speed} m/s;
    document.querySelector('.weather-card').style.display = 'block';
}
