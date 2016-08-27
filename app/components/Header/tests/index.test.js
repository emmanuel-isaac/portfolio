import Header from '../index';

import expect from 'expect';
import { mount } from 'enzyme';
import React from 'react';


describe('<Header />', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(true);
  });

  it('renders Navbar component', () => {
    const rendered = mount(<Header />);
    expect(rendered.find('nav').length).toEqual(1);
  });
});
