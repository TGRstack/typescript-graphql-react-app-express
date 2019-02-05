import * as React from 'react'

import ResetButton from './ResetButton'
import SubmitButton from './SubmitButton'

import './Form.scss'

interface IProps {
  children: JSX.Element | JSX.Element[],
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => any, // tslint:disable-line no-any
  handleReset: (e: React.FormEvent<HTMLFormElement>) => any, // tslint:disable-line no-any
  reset?: boolean,
  submit?: boolean,
}

interface IState {
}

export default class Form extends React.Component<IProps, IState> {
  static defaultProps = {
    reset: false,
    submit: true,
  }
  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    const {
      reset,
      submit,
    } = this.props

    return <div className="ui_form--container">
      {/* {this.header()} */}
      <form onSubmit={e => this.props.handleSubmit(e)}>
        {this.props.children}
        {(reset || submit) && this.renderButtons()}
      </form>
    </div>
  }
  renderButtons() {
    const {
      reset,
      submit,
    } = this.props

    const btns = []
    reset && btns.push(<SubmitButton key={0} handleClick={() => null} />)
    submit && btns.push(<ResetButton key={1} handleClick={this.props.handleReset} />)

    return <div className="ui_form--buttons">
      {...btns}
    </div>
  }
}
