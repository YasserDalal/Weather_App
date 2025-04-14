import {getWeather} from '../Weather.js'

const apiKey = `675e659900499c1bb96ef94445c82315`;
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Philippines&units=metric&appid=`;


async function renderAtFirstLoad(){
  const response = await fetch(apiURL + `${apiKey}`)
  const data = await response.json()

  document.querySelector('.main-container').innerHTML += `
      <div class="flex flex-col">
        <div class="flex justify-center">
          <img src="./images/clear.png" alt="Sunny Image" class="weather-image w-40">
        </div>
        <div class="flex justify-center flex-col items-center">
          <h1 class="country-temperature text-6xl">43°c</h1>
          <h2 class="country-or-place text-xl py-4">Caloocan City</h2>
        </div>
        <div class="grid grid-cols-2">
          <div class="flex justify-end pr-16">
            <div class="bg-slate-900 w-auto rounded-2xl">
              <div class="flex flex-col justify-end py-2 px-3 ">
                <div class="flex items-center">
                  <i class="fas fa-water text-slate-400"></i>
                  <div class="humidity text-slate-400 pl-1">Humidity</div>
                </div>
                <div class="humidity-percentage text-2xl text-center">48%</div>
              </div>
            </div> 
          </div>
            
          <div class="flex pl-16">
            <div class="bg-slate-900 w-auto rounded-2xl">
              <div class="flex flex-col justify-end py-2 px-3 ">
                <div class="flex items-center">
                  <i class="fa-solid fa-wind text-slate-400"></i>
                  <div class="wind-speed text-slate-400 pl-1">Wind Speed</div>
                </div>
                <div class="wind-velocity text-2xl text-center">5 km/h</div>
              </div>
            </div> 
          </div>
        </div>
      </div>
  `

  // image of weathers
  const weatherImage = document.querySelector('.weather-image');
  // temperature
  const countryTemperature = document.querySelector('.country-temperature');
  // country or place
  const countryOrPlace = document.querySelector('.country-or-place')

  // humidity percentage of the country or place
  const humidityPercentage = document.querySelector('.humidity-percentage')

  // wind speed of the country or place
  const windVelocity = document.querySelector('.wind-velocity')

  // change the image based on the weather
  if(data.weather[0].main === 'Clouds'){
    weatherImage.src = './images/clouds.png'
  } else if(data.weather[0].main === 'Rain'){
    weatherImage.src = './images/rain.png'
  } else if(data.weather[0].main === 'Clear'){
    weatherImage.src = './images/clear.png'
  } else if(data.weather[0].main === 'Mist') {
    weatherImage.src = './images/mist.png'
  } else if(data.weather[0].main === 'Snow'){
    weatherImage.src = './images/snow.png'
  } else if(data.weather[0].main === 'Drizzle'){
    weatherImage.src = './images/drizzle.png'
  }

  // render the temperature and country/place name
  countryTemperature.innerHTML = Math.round(data.main.temp) + '°c'
  countryOrPlace.innerHTML = data.name
  
  // render the humidity percentage
  humidityPercentage.innerHTML = Math.floor(data.main.humidity) + '%'

  // render wind speed velocity
  windVelocity.innerHTML = Math.round(data.wind.speed) + ' ' + 'km/h'

  // target the search input and search button
  const countrySearch = document.querySelector('.country-search');
  const searchIcon = document.querySelector('.search-icon');

  // add click event to search button
  searchIcon.addEventListener('click', () => {
    // if the country name is invalid do nothing
    if(!countrySearch) return; 

    // call the function if it's valie
    getWeather(countrySearch.value);
  });
}

renderAtFirstLoad()