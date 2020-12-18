import React, { Component } from 'react'

class addRecipe extends Component {
  state = {
    nom:'',
    image: '',
    ingredients: '',
    instructions: ''
  }
  render () {
    return (
      <div class="card">
        <form className="admin-form ajouter-recette">
          <input value={this.state.nom} 
                name="nom" 
                type="text" 
                placeholder="Recipe name"/>
          <input value={this.state.image} 
                name="image" 
                type="text" 
                placeholder="Image" />
          <textarea value={this.state.ingredients} 
                    name="ingredients" 
                    rows="3" 
                    placeholder="Ingredient list" />
          <textarea value={this.state.instructions} 
                    name="instructions" 
                    rows="15" 
                    placeholder="Instructions list" />
        </form>
      </div>
    )
  }
}

export default addRecipe