import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('HomePage', () => {

  it('should match the snapshot', () => {
    let wrapper = shallow(<HomePage />)
    expect(wrapper).toMatchSnapshot();
  })
})