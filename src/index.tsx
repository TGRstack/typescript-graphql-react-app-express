// Client Entry Point
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './stack'

const root = document.getElementById('app')

// ReactDOM.render(<App />, root)
// React 16.7 Concurrent Mode
ReactDOM.createRoot(root).render(<App />)
