import React, { Component } from 'react'
// data
import recettes from '../recettes'

//firebase
import base from '../base'

const withFirebase = WrappedComponent => (
  class HOC extends Component {

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
  
    // componentDidUpdate () {
    //   console.log('coucou update')
    // }
  
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
      return (
        <WrappedComponent
        recettes={this.state.recettes}
        addRecipe={this.addRecipe}
        updateRecipe={this.updateRecipe}
        deleteRecipe={this.deleteRecipe}
        loadSeed={this.loadSeed}
        { ...this.props}
        
        />
      )
    }
  }
)


export default withFirebase