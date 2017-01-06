import React from 'react';
import { mount } from 'enzyme';

import LocationBar from './LocationBar';

describe("WeatherData", () => {
  it("renders the wrapper without crashing", () => {
    mount(<LocationBar onLocationChange={(e) => {
    }}/>);
  });

  it("fires changed callback if input is submitted", () => {
    let changed = false;
    let newLoc = '';

    const wrapper = mount(<LocationBar onLocationChange={(newLocation) => {
      changed = true;
      newLoc = newLocation;
    }}/>);

    const input = wrapper.ref('locationInput');
    input.node.value = "Vienna";
    input.simulate('submit', input);
    expect(changed).toEqual(true);
  });
});