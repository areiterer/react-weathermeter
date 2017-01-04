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
      maxTemp={testData.main.temp_max}/>);
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
});