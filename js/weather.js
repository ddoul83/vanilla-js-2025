const API_KEY = "0b96b2515f18c3f29d4c0eb3855b1fee";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const temp = Math.round(data.main.temp);
      weather.innerText = `${data.weather[0].main}  ${temp}℃`;
      city.innerText = `@${data.name}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather..Sorry");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
