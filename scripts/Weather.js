const apiKey = `675e659900499c1bb96ef94445c82315`;
const apiURL = `https://api.openweathermap.org/data/2.5/weather?`;

// search for country
const countrySearch = document.querySelector('.country-search');
const searchIcon = document.querySelector('.search-icon');


export async function getWeather(countryNameOrPlace){
  // get the api data from open weather
  const response = await fetch(apiURL + `q=${countryNameOrPlace}` + `&units=metric` + `&appid=${apiKey}`);
  const data = await response.json();

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

}

// add click event for search button
searchIcon.addEventListener('click', () => {
  // if the country name is invalid do nothing
  if(!countrySearch) return; 

  getWeather(countrySearch.value)
})

