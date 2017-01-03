import React, { Component } from 'react';
import './App.css';

import WeatherData from './components/WeatherData';
import {testData} from './sampleData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherData data={testData} />
      </div>
    );
  }
}

export default App;
