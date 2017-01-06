import React from 'react';
import FontAwesome from 'react-fontawesome';

function WeatherData(props) {
  return (
    <div>
      <h2 id="cityName">{props.cityName}</h2>
      <div>
        <span id="temperature">{props.temp}</span>
        <span className="unit">°C</span>
      </div>
      <div>
        <FontAwesome name="thermometer-empty" />
        <span id="mintemp">{props.minTemp}</span>
        <span className="unit">°C</span>
      </div>
      <div>
        <FontAwesome name="thermometer-full" />
        <span id="maxtemp">{props.maxTemp}</span>
        <span className="unit">°C</span>
      </div>
      <div>
        <i className="wi wi-humidity" />
        <span id="humidity">{props.humidity}</span>
        <span className="unit">%</span>
      </div>
      <div>
        <i className="wi wi-barometer" />
        <span id="airpressure">{props.airPressure}</span>
        <span className="unit">hPa</span>
      </div>
      <div>
        <i className="wi wi-strong-wind" />
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