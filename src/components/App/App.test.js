import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('showLogin', () => {
    it('sets the loginClass state property to show when called', () => {
      wrapper.instance().showLogin();
      expect(wrapper.state('loginClass')).toEqual('show')
    })
  })

  describe('hideLogin', () => {
    it('sets the loginClass state property to hidden when called', () => {
      wrapper.setState({ loginClass: 'show' })
      wrapper.instance().hideLogin();
      expect(wrapper.state('loginClass')).toEqual('hidden')
    })
  })

})

