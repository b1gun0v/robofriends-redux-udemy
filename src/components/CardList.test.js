import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('should render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'John',
      email: 'john@gmail.com',
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />).length).toEqual(1);
});
