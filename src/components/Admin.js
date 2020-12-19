import React, { Component } from 'react'
import AddRecipe from './AddRecipe'
import AdminForm from './AdminForm'
import Login from './Login'

// firebase - for Oauth
import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../base'

class Admin extends Component {
  state = {
    uid: null,
    user: null
  }

  handleAuth = authData => {
    // check in console all 
    console.log(authData)
  }

  authenticate = () => {
    const authProvider = new firebase.auth.FacebookAuthProvider()
    firebaseApp
      .auth()
      // in the case of twitter or github just replace facebook below
      .signInWithPopup(authProvider)
      .then(this.handleAuth)
  }

  render () {
    const { recipes, addRecipe, updateRecipe, loadSeed, deleteRecipe } = this.props

    //if user is not connected
    //there is no uid 
    if(!this.state.uid) {
      return <Login authenticate={this.authenticate}></Login>
    }


    return (
      <div className="card">
      <AddRecipe addRecipe={addRecipe} />
      {
        Object.keys(recipes)
          .map(key => <AdminForm
            key={key}
            //we can't access to key in react that why we set up ID
            id={key}
            updateRecipe={updateRecipe}
            deleteRecipe={deleteRecipe}
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