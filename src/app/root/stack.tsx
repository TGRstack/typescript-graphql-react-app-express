import * as React from 'react'
import Middlewares from '../middleware'
import Application from './application'

const Stack = () => (
  <React.StrictMode>
    <Middlewares>
      <Application />
    </Middlewares>
  </React.StrictMode>
)
export default Stack
