import React, { Component } from 'react'
import AddRecipe from './AddRecipe'

class Admin extends Component {
  render () {
    return (
      <div class="card">
      <AddRecipe addRecipe={this.props.addRecipe} />
        <footer>
          <button
            onClick={this.props.loadSeed}>
            Seed
          </button>
        </footer>
      </div>
      
    )
  }
}

export default Admin