import React, { Component } from 'react'
// CSS
import './App.css'

//components
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

// HOC
import withFirebase from './hoc/withFirebase'

const App =(props) => {
  const cards = Object.keys(props.recettes)
      .map(key => 
        <Card
        key={key}
        details={props.recettes[key]}>
        </Card>
      )

  return (
    <div className='box'>
      <Header pseudo={props.match.params.pseudo}></Header>
      <div className='cards'>
        { cards }
      </div>
      <Admin
        pseudo={props.match.params.pseudo}
        // after the HOC set up, it's in the props now
        recipes={props.recettes}
        updateRecipe={props.updateRecipe}
        addRecipe={props.addRecipe}
        deleteRecipe={props.deleteRecipe}
        loadSeed={props.loadSeed}
      />
    </div>
  )
}

const WrappedComponent = withFirebase(App)

export default WrappedComponent
