const api = 'c98c8f40f5af848effd7b86610a20ea4';
const main = document.getElementById('main');
const search = document.getElementById('search');
const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
async function getWeather(city) {
  const resp = await fetch(url(city), { origin: 'cros' });
  const respData = await resp.json();
  addWheater(respData);
}

function addWheater(data) {
  const temp = Ktoc(data.main.temp);
  const weather = document.createElement('div');
  weather.classList.add('weather');
  weather.innerHTML = `
    <div class="bg-indigo-600 bg-opacity-40 w-[350px] rounded-xl">
      <img src="img/${data.weather[0].icon}.png"/>
      <h2 class="font-bold text-white text-6xl text-center">
          ${temp}° C
      </h2>
      <small class="text-white text-2xl capitalize">${data.weather[0].description}</small>
    </div>`;
  main.innerHTML = '';
  main.appendChild(weather);
}

function Ktoc(K) {
  return Math.floor(K - 273.15);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = search.value;
  if (city) {
    getWeather(city);
  }
});
