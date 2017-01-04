import React, { Component } from 'react';
import './App.css';

import WeatherData from './components/WeatherData';
import { testData } from './sampleData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherData
          cityName={testData.name}
          temp={testData.main.temp}
          minTemp={testData.main.temp_min}
          maxTemp={testData.main.temp_max}/>
      </div>
    );
  }
}

export default App;
