import * as React from 'react'
import * as S from './DropdownMenu.scss'

interface IProps {
  label: JSX.Element,
  children: JSX.Element[],
}
interface IState {
  show: boolean,
}
class Dropdown extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      show: false,
    }

  }

  toggleCloseListener(on: boolean = true) {
    if (on)  {
      document.addEventListener('click', this.hideContent)
    } else {
      document.removeEventListener('click', this.hideContent)
    }
  }

  showContent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    this.setState({ show: true }, () => this.toggleCloseListener(true))
  }
  hideContent = () => {
    this.setState({ show: false }, () => this.toggleCloseListener(false))
  }

  renderLabel() {
    return <div className={S.button} onClick={this.showContent}>
      {this.props.label}
    </div>
  }
  renderContent() {
    const {children} = this.props
    return (
      <ul>
        {children.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    )
  }
  render() {
    return (
        <div  className={S.container}>
          {this.renderLabel()}
          {this.state.show  && this.renderContent()}
        </div>

    )
  }
}

export default Dropdown
