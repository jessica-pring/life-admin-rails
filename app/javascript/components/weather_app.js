const info = document.querySelector('#weather-container');
const weatherIcons = document.querySelector('#weather');

const displayWeather = (data) => {
  const city = data.name;
  const description = (data.weather[0]).main;
  const date = new Date();

  const infoText = `<h1>Weather in ${city}</h1>
    <h4>${date.toDateString()}</h4>
    <p>${description}</p>`;
  // info.innerHTML = '';
  info.insertAdjacentHTML("beforeend", infoText);

  const iconID = (data.weather[0]).icon;
  const iconURL = `http://openweathermap.org/img/wn/${iconID}@2x.png`;
  const tempString = data.main.temp;
  const temp = Math.round(parseInt(tempString, 10));

  const weatherInfo = `<img src=${iconURL} alt="weather icon">
    <span id="temp">${temp}°C</span>`;
  // weatherIcons.innerHTML = '';
  weatherIcons.insertAdjacentHTML("beforeend", weatherInfo);
}

const getWeather = (url) => {
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      displayWeather(data);
    });
}

export { getWeather };
