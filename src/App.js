import React, { Component } from 'react'
// CSS
import './App.css'

//components
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

// data
import recettes from './recettes'

//firebase
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    })
  }

  componentWillUnmount () {
    base.removeBinding(this.ref)
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
