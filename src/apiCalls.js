const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=f57105642b469ddc58402f502ed12347';

export function fetchWeatherInfoByGeolocation(long, lat) {
  return fetch(baseUrl+'&lon='+long+'&lat='+lat+'&units=metric', {
    method: 'get'
  }).then((response) => {
    return response.json()
  });
}

export function fetchWeatherInfoByLocationName(locationName) {
  return fetch(baseUrl+'&q='+locationName+'&units=metric', {
    method: 'get'
  }).then((response) => {
    return response.json()
  });
}