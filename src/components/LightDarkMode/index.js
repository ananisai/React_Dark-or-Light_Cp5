// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onChangeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const changeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const ButtonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="app-container">
        <div className={`container ${changeClassName}`}>
          <h1 className="main-heading">click To Change Mode</h1>
          <div className="button-container">
            <button
              type="button"
              className="button_Change_Mode"
              onClick={this.onChangeMode}
            >
              {ButtonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
