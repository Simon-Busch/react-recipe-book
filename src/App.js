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
    //if need to load data from API, it happens here
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    })
  }

  componentDidUpdate () {
    console.log('coucou update')
  }

  componentWillUnmount () {
    base.removeBinding(this.ref)
  }

  addRecipe = (recette) => {
    const recettes = { ...this.state.recettes }
    recettes[`recette-${Date.now()}`] = recette
    this.setState({ recettes })
  }

  updateRecipe = (id, newRecipe) => {
    const recettes = { ...this.state.recettes }
    recettes[id] = newRecipe
    this.setState({ recettes })
  }

  deleteRecipe = (key) => {
    const recettes = { ...this.state.recettes }
    // delete
    recettes[key] = null
    this.setState({ recettes })
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
          pseudo={this.state.pseudo}
          recipes={this.state.recettes}
          updateRecipe={this.updateRecipe}
          addRecipe={this.addRecipe}
          deleteRecipe={this.deleteRecipe}
          loadSeed={this.loadSeed}
        />
      </div>
    )
  }
}

export default App
