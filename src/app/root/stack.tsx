import * as React from 'react'
import Middlewares from '../middleware'
import Appliance from './appliance'

const Stack = () => (
  <React.StrictMode>
    <Middlewares>
      <Appliance />
    </Middlewares>
  </React.StrictMode>
)
export default Stack
