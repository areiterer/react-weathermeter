import React from 'react';
import { mount } from 'enzyme';

import { testData } from '../sampleData';
import WeatherData from './WeatherData';

describe("WeatherData", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<WeatherData
      cityName={testData.name}
      temp={testData.main.temp}
      minTemp={testData.main.temp_min}
      maxTemp={testData.main.temp_max}
      humidity={testData.main.humidity}
      airPressure={testData.main.pressure}
      windSpeed={testData.wind.speed}
    />);
  });

  it("renders the name of the city", () => {
    const cityName = wrapper.find('#cityName');
    expect(cityName.length).toEqual(1);
    expect(cityName.text()).toEqual(testData.name);
  });

  it("renders the temperature", () => {
    const temp = wrapper.find('#temperature');
    expect(temp.length).toEqual(1);
    expect(temp.text()).toEqual(testData.main.temp.toString());
  });

  it("renders the minimum temperature", () => {
    const min = wrapper.find('#mintemp');
    expect(min.length).toEqual(1);
    expect(min.text()).toEqual(testData.main.temp_min.toString());
  });

  it("renders the maximum temperature", () => {
    const max = wrapper.find('#maxtemp');
    expect(max.length).toEqual(1);
    expect(max.text()).toEqual(testData.main.temp_max.toString());
  });

  it("renders the wind speed", () => {
    const windspeed = wrapper.find('#windspeed');
    expect(windspeed.length).toEqual(1);
    expect(windspeed.text()).toEqual(testData.wind.speed.toString());
  });

  it("renders the air pressure", () => {
    const pressure = wrapper.find('#airpressure');
    expect(pressure.length).toEqual(1);
    expect(pressure.text()).toEqual(testData.main.pressure.toString());
  });

  it("renders the humidity", () => {
    const humidity = wrapper.find('#humidity');
    expect(humidity.length).toEqual(1);
    expect(humidity.text()).toEqual(testData.main.humidity.toString());
  });

});