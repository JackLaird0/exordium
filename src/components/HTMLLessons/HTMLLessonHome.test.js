import React from 'react';
import { shallow } from 'enzyme';
import HTMLLessonHome from './HTMLLessonHome';

describe('HTMLLessonHome', () => {

  it('should match the snapshot', () => {
    let wrapper = shallow(<HTMLLessonHome />)
    expect(wrapper).toMatchSnapshot();
  })
})