import React from 'react';
import { mount } from 'enzyme';

import { testData } from '../sampleData';
import WeatherData from './WeatherData';

describe("WeatherData", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<WeatherData data={testData}/>);
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
});