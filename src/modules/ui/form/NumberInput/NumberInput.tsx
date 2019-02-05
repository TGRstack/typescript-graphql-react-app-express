import * as React from 'react'

import { INumberInput } from '.'

interface IProps extends INumberInput {
  // tslint:disable-next-line no-any
  handleChange: (value: number) => any
  value: number,
}

interface IState {
  value: number,
}

export default class NumberInput extends React.Component<IProps, IState> {
  static defaultProps = {
    disabled: false,
    name: 'text',
    placeholder: 'put some text in here....',
  }

  constructor(props: IProps) {
    super(props)

    this.state = {
      value: props.value,
    }
  }

  componentWillReceiveProps(np: IProps) {
    if (np.value !== this.state.value) {
      this.setState({value: np.value})
    }
  }

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {value} = e.currentTarget
    const numb = parseInt(value, 10)
    this.setState(ns => {
      this.props.handleChange(numb)
      return {
        ...ns,
        value: numb,
      }
    })
  }

  render() {
    // TODO: support classNames in props
    // TODO: add debounce to onChange
    return <div className="form__input--container">
      <input
        type="number"
        className="form__input--text"
        value={this.state.value}
        onChange={this.onChange}
        onKeyDown={this.props.handleKey}
        name={this.props.name}
        placeholder={this.props.placeholder}
        tabIndex={0}
        disabled={this.props.disabled}
      />
    </div>
  }
}
