import React from 'react';
import { shallow } from 'enzyme';
import CSSLessonHome from './CSSLessonHome';

describe('CSSLessonHome', () => {
  
  it('should match the snapshot', () => {
    let wrapper = shallow(<CSSLessonHome />)
    expect(wrapper).toMatchSnapshot();
  })
})