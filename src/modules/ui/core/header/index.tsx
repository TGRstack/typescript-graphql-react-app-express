import * as React from 'react'
import { Link } from 'react-router-dom'

import * as S from './Header.scss'
import HeaderLeftRight from './HeaderLeftRight'

export interface IHeader {
  left: JSX.Element[],
  right: JSX.Element[],
}

export default function HeaderIndex({
  left = [
    <Link to="/">
      <span className={S.text}>Title</span>
    </Link>,                    // tslint:disable-line jsx-key
  ],
  right = [
    <Link to="/one">First Link</Link>, // tslint:disable-line jsx-key
    <Link to="/two?id=foo">Second Link</Link>, // tslint:disable-line jsx-key
  ]
}: IHeader): JSX.Element {
  return  <HeaderLeftRight leftItems={left} rightItems={right}/>
}
