import React, { Component } from 'react';
import './App.css';

import WeatherData from './components/WeatherData';

import { fetchWeatherInfoByGeolocation } from './apiCalls';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.getWeatherInfoByLocation = this.getWeatherInfoByLocation.bind(this);
  }

  getWeatherInfoByLocation() {
    // TODO: Error handling (fetch+geolocation)!
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchWeatherInfoByGeolocation(position.coords.longitude, position.coords.latitude)
          .then((data) => {
            this.setState({ weatherInfo: data })
          });
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  componentDidMount() {
    this.getWeatherInfoByLocation();
  }

  render() {
    return (
      <div className="App">
        {this.state.weatherInfo ?
          <WeatherData
            cityName={this.state.weatherInfo.name}
            temp={this.state.weatherInfo.main.temp}
            minTemp={this.state.weatherInfo.main.temp_min}
            maxTemp={this.state.weatherInfo.main.temp_max}/>
        : 'loading ...'}

      </div>
    );
  }
}

export default App;
