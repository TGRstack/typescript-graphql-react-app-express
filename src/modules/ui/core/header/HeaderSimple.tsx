import * as React from 'react'

import * as T from '../theme.scss'
import * as S from './Header.scss'

interface IProps {
  items: React.ReactChild[],
}

class Header extends React.Component<IProps, {}> {
  renderItems() {
    return this.props.items.map((item, i) => <li key={i}>
      {item}
    </li>)
  }

  render() {
    return <nav>
      <div className={[S.list, T.fill_primary].join(' ')}>
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    </nav>
  }
}

export default Header
