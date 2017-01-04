import React from 'react';

function WeatherData(props) {
  return <div>
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
  </div>;
}

WeatherData.propTypes = {
  cityName: React.PropTypes.string.isRequired,
  temp: React.PropTypes.number.isRequired,
  minTemp: React.PropTypes.number.isRequired,
  maxTemp: React.PropTypes.number.isRequired
};

export default WeatherData;