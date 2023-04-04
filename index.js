let now = new Date();

let hour = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let heading = document.querySelector("h1");
heading.innerHTML = `${day},${hour}:${minutes}`;

function showCity(response) {
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("#temperature");
  temp.innerHTML = `${temperature}`;
  let currentCity = response.data.name;
  let Cities = document.querySelector("#city-name");
  Cities.innerHTML = `${currentCity}`;
}
function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let city = `${searchInput.value}`;
  let units = "metric";
  let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
  let url = "https://api.openweathermap.org/data/2.5/weather?q=";
  let apiUrl = `${url}${city}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showCity);
}
let searchBar = document.querySelector("#search-form");
searchBar.addEventListener("submit", searchCity);

function searchLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiKey = "6c18ab348fe089a230279370cb49dcb2";
  let url = "https://api.openweathermap.org/data/2.5/weather?";
  let aipUrl = `${url}lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

  axios.get(aipUrl).then(showCity);
}
function currentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentButton = document.querySelector("#current");
currentButton.addEventListener("click", currentPosition);
