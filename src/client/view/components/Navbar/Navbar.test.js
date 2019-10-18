/* eslint-disable no-magic-numbers */

import React from 'react';
import Navbar from './Navbar';
import enzyme, { mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe("Navbar", () => {
  it('renders Navbar', () => {
    const component = mount(<Navbar />);
    expect(component.find('Navbar').length).toEqual(1);
  });
});