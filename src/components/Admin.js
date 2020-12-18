import React, { Component } from 'react'
import AddRecipe from './AddRecipe'
import AdminForm from './AdminForm'

class Admin extends Component {
  render () {
    const { recipes, addRecipe, updateRecipe, loadSeed } = this.props
    return (
      <div class="card">
      <AddRecipe addRecipe={addRecipe} />
      {
        Object.keys(recipes)
          .map(key => <AdminForm
            key={key}
            //we can't access to key in react that why we set up ID
            id={key}
            updateRecipe={updateRecipe}
            recipes={recipes}
          />
          )
      }
        <footer>
          <button
            onClick={loadSeed}>
            Seed
          </button>

        </footer>
      </div>
      
    )
  }
}

export default Admin