import * as React from 'react'

import Button, { buttonDefaults, IButton } from '.'

interface IIconButton extends IButton {
  position: 'left' | 'right',
  Icon: JSX.Element,
}

export default class IconButton extends React.Component<IIconButton> {
  static defaultProps = buttonDefaults

  render() {
    const {
      position,
      Icon,
      label,
    } = this.props

    return <Button {...this.props}>
      <div className="ui_button--contents">
        {position === 'left' ? (Icon) : (label)}
        {position === 'left' ? (label) : (Icon)}
      </div>
    </Button>
  }
}
