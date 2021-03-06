import React from 'react'
import { ColorContext } from './Color'

const Card = ({ details }) => {
  const ingredients = details.ingredients
      .split(',')
      .map(item => 
        <li key={item}>{item}</li>)
  
  const instructions = details.instructions
  .split('\n')
  .map(item => 
    <li key={item}>{item}</li>)
  
  // handle if image path is wrong
  const requireImage = (chemin) => {
    try {
      return require(`../img/${chemin}`)
    } catch (err) {
      return require(`../img/default.jpeg`)
    }
  }
      
  return (
    <ColorContext.Consumer>
      {context => (
        <div className="card">
        <div className="image">
          {/* {important to mention path with require for when webpack compile} */}
          <img src={requireImage(details.image)} alt={details.nom} />
        </div>
          <div className="recette">
            <h2>{details.nom}</h2>
            <ul className="liste-ingredients" style={{backgroundColor: context.state.color2}}>
              {ingredients}
            </ul>
            <ol className="liste-instructions" >
              {instructions}
            </ol>
          </div>
        </div>
      )}
    </ColorContext.Consumer>
  )
}

export default Card