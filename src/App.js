import React, { Component } from 'react'
// CSS
import './App.css'

//components
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'
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
    const cards = Object.keys(this.state.recettes)
      .map(key => 
        <Card
        key={key}
        details={this.state.recettes[key]}>
        </Card>
      )

    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}></Header>
        <div className='cards'>
          { cards }
        </div>
        <Admin 
          loadSeed={this.loadSeed}
        />
      </div>
    )
  }
}

export default App
