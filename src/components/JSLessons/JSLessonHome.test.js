import React from 'react';
import { shallow } from 'enzyme';
import JSLessonHome from './JSLessonHome';

describe('JSLessonHome', () => {

  it('should match the snapshot', () => {
    let wrapper = shallow(<JSLessonHome />)
    expect(wrapper).toMatchSnapshot();
  })
})