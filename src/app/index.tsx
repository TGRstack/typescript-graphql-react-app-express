// Client Entry Point
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Root from './root/stack'

const root = document.getElementById('react-root')

// React 16.8? Concurrent Mode
ReactDOM.unstable_createRoot(root).render(<Root />)

// React < 16.7
// ReactDOM.render(<App />, root)
