import React from 'react'
import { App } from '../../../client/containers/App'

import { shallow} from 'enzyme'


describe('App container', () => {

  it('displays Table container if isAuthenticated is true', () => {
    const wrapper = shallow(<App auth={{isAuthenticated: true}}/>)
    const actual = wrapper.find('Connect(Table)').length

    expect(actual).toEqual(1)
  })

  it('renders div.home-page when isAuthenticated is false', () => {
    const wrapper = shallow(<App auth={{isAuthenticated: false}}/>)
    const expected = 1
    const actual = wrapper.find('.home-page').length

    expect(actual).toBe(expected)
  })

  it('is the same snapshot', () => {
    const wrapper = shallow(<App auth={{isAuthenticated: false}}/>)
    expect(wrapper).toMatchSnapshot()

  })
})
