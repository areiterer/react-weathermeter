import React from 'react';

function WeatherData(props) {
  return (
    <div id="weatherData" className="container">
      <h2 id="cityName">{props.cityName}</h2>
      <div className="row">
        <div className="col-xs-6">
          <div>
          <span id="temperature">{props.temp}</span>
          <span className="unit">°C</span>
          </div>
          <div className="row">
            <div>
              <i className="fa fa-thermometer-empty"/>
              <span id="mintemp">{props.minTemp}</span>
              <span className="unit">°C</span>
            </div>
            <div>
              <i className="fa fa-thermometer-full"/>
              <span id="maxtemp">{props.maxTemp}</span>
              <span className="unit">°C</span>
            </div>

          </div>
        </div>
        <div className="col-xs-6">
          <div>
            <i className="wi wi-humidity"/>
            <span id="humidity">{props.humidity}</span>
            <span className="unit">%</span>
          </div>
          <div>
            <i className="wi wi-barometer"/>
            <span id="airpressure">{props.airPressure}</span>
            <span className="unit">hPa</span>
          </div>
          <div>
            <i className="wi wi-strong-wind"/>
            <span id="windspeed">{props.windSpeed}</span>
            <span className="unit">m/s</span>
          </div>
        </div>
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