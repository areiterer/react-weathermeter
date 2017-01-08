import React, { Component } from 'react';
import './App.css';

import WeatherData from './components/WeatherData';
import LocationBar from './components/LocationBar';

import { fetchWeatherInfoByGeolocation, fetchWeatherInfoByLocationName } from './apiCalls';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.getWeatherInfoByLocation = this.getWeatherInfoByLocation.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.getBackgroundClass = this.getBackgroundClass.bind(this);
  }

  componentDidMount() {
    this.getWeatherInfoByLocation();
  }

  // TODO: Error handling (fetch+geolocation)!
  getWeatherInfoByLocation(locationName) {
    if (locationName) {
      fetchWeatherInfoByLocationName(locationName)
        .then((data) => {
          this.setState({ weatherInfo: data })
        });
    }
    else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          fetchWeatherInfoByGeolocation(position.coords.longitude, position.coords.latitude)
            .then((data) => {
              this.setState({ weatherInfo: data })
            });
        });
      } else {
        // TODO: Better?
        console.log('Geolocation is not supported by this browser.');
      }
    }
  }

  handleLocationChange(locationName) {
    this.getWeatherInfoByLocation(locationName);
  }

  getBackgroundClass() {
    if(!this.state.weatherInfo)
      return '';

    const cloudyness = this.state.weatherInfo.clouds.all;

    if(cloudyness < 20)
      return 'bg-sunny';
    else
      return 'bg-cloudy';

  }

  render() {
    return (
      <div className={"App "+this.getBackgroundClass()}>
        {this.state.weatherInfo ?
          <div>
            <LocationBar onLocationChange={this.handleLocationChange}/>
            <WeatherData
              cityName={this.state.weatherInfo.name}
              temp={Number(this.state.weatherInfo.main.temp.toFixed(0))}
              minTemp={Number(this.state.weatherInfo.main.temp_min.toFixed(0))}
              maxTemp={Number(this.state.weatherInfo.main.temp_max.toFixed(0))}
              humidity={this.state.weatherInfo.main.humidity}
              airPressure={this.state.weatherInfo.main.pressure}
              windSpeed={this.state.weatherInfo.wind.speed}
              weatherCode={this.state.weatherInfo.weather[0].icon}
            />
          </div>
          : 'loading ...'}

      </div>
    );
  }
}

export default App;
