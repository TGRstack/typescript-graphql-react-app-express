import * as React from 'react'
import { Link } from 'react-router-dom'

import { IList, IListItem, ListContainer as List } from '.'
import { ReactChildren } from '../../types/common'

interface ILinkListItem extends IListItem {
  url: string,
}
interface IProps extends IList {
  items: ILinkListItem[]
}

// tslint:disable-next-line no-any
export default class LinkList extends React.PureComponent<IProps, any> {
  renderListItem({label, url}: ILinkListItem, key: number) {
    const L = ({to = '/', children}: {to: string, children: ReactChildren}) => to.split('http').length > 1
      ? <a href={to} target="_new">{children}</a>
      : <Link to={to}>{children}</Link>

    return <li key={key}>
      <L to={url}>
        <span>{label}</span>
      </L>
    </li>
  }
  render() {
    return <List {...this.props} >
      {this.props.items.map((i: ILinkListItem, k: number) =>
        this.renderListItem(i, k)
      )}
    </List>
  }
}
