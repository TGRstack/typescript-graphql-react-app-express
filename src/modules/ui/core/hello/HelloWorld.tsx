import * as React from 'react'
import * as S from './HelloWorld.css'

function HelloWorldMaker(message: string): JSX.Element {
  return <div className={S.rainbow}>
    {message}
  </div>
}

export default HelloWorldMaker
