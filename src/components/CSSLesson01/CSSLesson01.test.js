import React from 'react';
import { shallow } from 'enzyme';
import CSSLesson01 from './CSSLesson01';

describe('CSSLesson01', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CSSLesson01 />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})