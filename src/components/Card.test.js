import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('should render Card component', () => {
  expect(shallow(<Card />).length).toEqual(1);
});

it('should render Card component snapshot', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
