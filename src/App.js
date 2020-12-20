import React, { Component } from 'react'
// CSS
import './App.css'

//components
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

// HOC
import withFirebase from './hoc/withFirebase'

// Proptype
import PropTypes from 'prop-types'

//Context 
import ColorContext from './components/Color'

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
    <ColorContext>
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
    </ColorContext>
  )
}

// will check if the type is correct. 
// If all ok, ,no problem, otherwise error in console
App.propTypes = {
  match: PropTypes.object.isRequired,
  recettes: PropTypes.object.isRequired,
  updateRecipe: PropTypes.func.isRequired,
  addRecipe: PropTypes.func.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
  loadSeed: PropTypes.func.isRequired
}

const WrappedComponent = withFirebase(App)

export default WrappedComponent
