import React, { Component } from 'react'

class addRecipe extends Component {
  state = {
    nom:'',
    image: '',
    ingredients: '',
    instructions: ''
  }

  //this way we have one function flexible for all the inputs
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState ( { [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const recette = {...this.state}
    this.props.addRecipe(recette)
    //reset
    Object.keys(recette).forEach(item => {
      recette[item] = ''
    })
    this.setState ( { recette })
  }

  render () {
    return (
      <div className="card">
        <form className="admin-form ajouter-recette"
              onSubmit={this.handleSubmit }>
          <input value={this.state.nom} 
                onChange={this.handleChange}
                name="nom" 
                type="text" 
                placeholder="Recipe name"/>
          <input value={this.state.image} 
                onChange={this.handleChange}
                name="image" 
                type="text" 
                placeholder="Image" />
          <textarea value={this.state.ingredients} 
                    onChange={this.handleChange}
                    name="ingredients" 
                    rows="3" 
                    placeholder="Ingredient list" />
          <textarea value={this.state.instructions} 
                    onChange={this.handleChange}
                    name="instructions" 
                    rows="15" 
                    placeholder="Instructions list" />

          <button type="submit">Add a recipe</button>
        </form>
      </div>
    )
  }
}

export default addRecipe