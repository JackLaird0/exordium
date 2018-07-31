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

  describe('handleInputChange', () => {

    it('sets the styles property on state to have a key and value that match the input from user', () => {
      let mockEvent = {target: { value: 'justify-content: flex-end;'}};
      let expected = {
        'justify-content': ' flex-end;'
      }
      wrapper.instance().handleInputChange(mockEvent);
      expect(wrapper.state('styles')).toEqual(expected)
    })
  })

  describe('toggleNextButton', () => {

    it('sets the nextButton to false if the userInput is correct', () => {
      let mockEvent = { target: { value: 'justify-content: flex-end;' } };

      wrapper.instance().toggleNextButton(mockEvent)
      expect(wrapper.state('nextButton')).toEqual(false)
    })

    it('sets the nextButton to true if the userInput is incorrect', () => {
      let mockEvent = { target: { value: 'justify-content: garbage' } };
      wrapper.instance().toggleNextButton(mockEvent)
      expect(wrapper.state('nextButton')).toEqual(true)      
    })
  })
})