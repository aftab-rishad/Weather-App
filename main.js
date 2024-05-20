const apiKey = `2183a8695f034b3eb4881304242005`;
const apiUrl = `https://api.weatherapi.com/v1/current.json?&aqi=no&q=`;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function weather(city) {
  const res = await fetch(apiUrl + city + `&key=${apiKey}`);
  let data = await res.json();
  document.querySelector(".city").innerHTML = `${data.location.name}`;
  document.querySelector(".temp").innerHTML = `${Math.round(
    data.current.temp_c
  )} °C`;
  document.querySelector(".hum div h2").innerHTML = `${data.current.humidity}%`;
  document.querySelector(
    ".wind div h2"
  ).innerHTML = `${data.current.wind_kph} km/h`;
  document.querySelector(".image img").src = `${data.current.condition.icon}`;
}

searchBtn.addEventListener("click", () => {
  weather(searchBox.value);
});
