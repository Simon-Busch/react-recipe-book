import React, { Component } from 'react'
// CSS
import './App.css'

//components
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

// HOC
import withFirebase from './hoc/withFirebase'

const App =({
  match,
  recettes,
  updateRecipe,
  addRecipe,
  deleteRecipe,
  loadSeed
}) => {
  const cards = Object.keys(recettes)
      .map(key => 
        <Card
        key={key}
        details={recettes[key]}>
        </Card>
      )

  return (
    <div className='box'>
      <Header pseudo={match.params.pseudo}></Header>
      <div className='cards'>
        { cards }
      </div>
      <Admin
        pseudo={match.params.pseudo}
        // after the HOC set up, it's avaialble thorugh the props and caught back through destructuring
        recipes={recettes}
        updateRecipe={updateRecipe}
        addRecipe={addRecipe}
        deleteRecipe={deleteRecipe}
        loadSeed={loadSeed}
      />
    </div>
  )
}

const WrappedComponent = withFirebase(App)

export default WrappedComponent
