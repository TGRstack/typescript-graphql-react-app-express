import { shallow } from 'enzyme'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from '../stack'

describe('Application Integration', () => {
  it('loads w/o crashing', () => {
    const root = document.createElement('div')
    root.setAttribute('id', 'app')
    ReactDOM.render(<App />, root)
    // ReactDOM.createRoot(root).render(<App />)
  })
  it('matches the snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
