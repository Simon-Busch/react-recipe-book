import React, { Component } from 'react'

const ColorContext = React.createContext()

class ColorProvider extends Component {
  state= {
    color: 'orange',
    color2:'seagreen'
  }
  render () {
    return (
      <ColorContext.Provider
      //we pass the value of the state
      value= {{
        state: this.state
      }}>
        {/* {render all the components passed through that PLUS the state} */}
        {this.props.children}
      </ColorContext.Provider>
    )
  }
}
export { ColorContext }
export default ColorProvider