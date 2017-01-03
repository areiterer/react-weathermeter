import React from 'react';

function WeatherData(props) {
  return <div>
    <h1 id="cityName">{props.data.name}</h1>
    <span><b>Temperature: </b><span id="temperature">{props.data.main.temp}</span></span>
  </div>;
}

WeatherData.propTypes = {
  data: React.PropTypes.object.isRequired
};

export default WeatherData;