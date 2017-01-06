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

  render() {
    return (
      <div className="App">
        {this.state.weatherInfo ?
          <div>
            <LocationBar onLocationChange={this.handleLocationChange}/>
            <WeatherData
              cityName={this.state.weatherInfo.name}
              temp={this.state.weatherInfo.main.temp}
              minTemp={this.state.weatherInfo.main.temp_min}
              maxTemp={this.state.weatherInfo.main.temp_max}
              humidity={this.state.weatherInfo.main.humidity}
              airPressure={this.state.weatherInfo.main.pressure}
              windSpeed={this.state.weatherInfo.wind.speed}
            />
          </div>
          : 'loading ...'}

      </div>
    );
  }
}

export default App;
