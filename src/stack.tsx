import * as React from 'react'
import Application from './app'
import Middlewares from './middleware'

const Stack = () => (
  <React.StrictMode>
    <Middlewares>
      <Application />
    </Middlewares>
  </React.StrictMode>
)
export default Stack
