/* eslint-disable no-magic-numbers */

import React from 'react';
import enzyme, { mount } from 'enzyme';
import LoadingIndicator from './LoadingIndicator';
import * as Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe("LoadingIndicator", () => {
  it('renders CircularProgress', () => {
    const component = mount(<LoadingIndicator />);
    expect(component.find('LoadingIndicator').length).toEqual(1);
  });
});