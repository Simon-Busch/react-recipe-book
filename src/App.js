import React, { Component } from 'react'
// CSS
import './App.css'

//components
import Header from './components/Header'
import Admin from './components/Admin'
import recettes from './recettes'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }
  loadSeed = () => {
    this.setState( { recettes })
  } 

  render () {
    

    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}></Header>
        <div className='cards'>
          <div className='card'>
            <h2>Card</h2>
          </div>
        </div>
        <Admin 
          loadSeed={this.loadSeed}
          
        />
      </div>
    )
  }
}

export default App
