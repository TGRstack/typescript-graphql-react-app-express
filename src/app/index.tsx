// Client Entry Point
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Root from './root/application'

const root = document.getElementById('react-root')

// React 16.7 Concurrent Mode
ReactDOM.createRoot(root).render(<Root />)

// React < 16.7
// ReactDOM.render(<App />, root)
