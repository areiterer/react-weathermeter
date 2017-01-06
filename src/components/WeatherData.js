import React from 'react';

function WeatherData(props) {
  return (
    <div>
      <h2 id="cityName">{props.cityName}</h2>
      <div>
        <label>Temperature: </label>
        <span id="temperature">{props.temp}</span>
        <span className="unit">°C</span>
      </div>
      <div>
        <label>Min.: </label>
        <span id="mintemp">{props.minTemp}</span>
        <span className="unit">°C</span>
      </div>
      <div>
        <label>Max.: </label>
        <span id="maxtemp">{props.maxTemp}</span>
        <span className="unit">°C</span>
      </div>
      <div>
        <label>Humidity: </label>
        <span id="humidity">{props.humidity}</span>
        <span className="unit">%</span>
      </div>
      <div>
        <label>Air pressure: </label>
        <span id="airpressure">{props.airPressure}</span>
        <span className="unit">hPa</span>
      </div>
      <div>
        <label>Wind speed: </label>
        <span id="windspeed">{props.windSpeed}</span>
        <span className="unit">m/s</span>
      </div>
    </div>
  );
}

WeatherData.propTypes = {
  cityName: React.PropTypes.string.isRequired,
  temp: React.PropTypes.number.isRequired,
  minTemp: React.PropTypes.number.isRequired,
  maxTemp: React.PropTypes.number.isRequired,
  humidity: React.PropTypes.number.isRequired,
  airPressure: React.PropTypes.number.isRequired,
  windSpeed: React.PropTypes.number.isRequired
};

export default WeatherData;