import * as React from 'react'
import { Link } from 'react-router-dom'

import Button, { buttonDefaults, IButton } from '.'

interface ILinkButton extends IButton {
  url: string,
}

export default class LinkButton extends React.Component<ILinkButton> {
  static defaultProps = buttonDefaults

  render() {
    const {
      label,
      url,
    } = this.props

    return <Link to={url}>
      <Button {...this.props}>
        <div className="ui_button--contents">
          {label}
        </div>
      </Button>
    </Link>
  }
}
