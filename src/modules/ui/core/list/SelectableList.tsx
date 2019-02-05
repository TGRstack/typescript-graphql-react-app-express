import * as React from 'react'

import { IList, IListItem, ListContainer as List } from '.'

interface ISelectableListItem extends IListItem {
  value: string,
}
interface IProps extends IList {
  handleSelect: (...args: any[]) => void, // tslint:disable-line no-any
  items: ISelectableListItem[]
}

// tslint:disable-next-line no-any
export default class SelectableList extends React.PureComponent<IProps, any> {
  renderListItem({label, value}: ISelectableListItem, key: number) {
    return <li
      key={key}
      onClick={e => {
        e.preventDefault()
        this.props.handleSelect(value)
      }}
    >
      <span>{label}</span>
    </li>
  }
  render() {
    return <List>
      {this.props.items.map((i: ISelectableListItem, k: number) =>
        this.renderListItem(i, k)
      )}
    </List>
  }
}
