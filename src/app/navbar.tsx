import * as React from 'react'
import { Link } from 'react-router-dom'
import * as S from './theme.scss'

const navbar = (() => {
  const left = [
    <Link to="/">
      <span className={S.text}>TGR Fullstack</span>
    </Link>,                    // tslint:disable-line jsx-key
  ]
  const right = [
    <Link to="/example-0">Zeroth Example</Link>, // tslint:disable-line jsx-key
    <Link to="/example-1">First Example</Link>, // tslint:disable-line jsx-key
  ]
  return {
    left, right
  }
})()

export default navbar
