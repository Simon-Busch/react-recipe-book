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

  handleAuth = async authData => {
    // check in console all 
    // console.log(authData)
    const box = await base.fetch(this.props.pseudo, { context: this})
    // await -> this action MUST be done before moving on
    // fetch -> we collect these information from the database

    // if user doesn't exist
    if (!box.user) {
      // write data
      await base.post(`${this.props.pseudo}/user`, {
        data: authData.user.uid
      })
    }

    //update the state
    this.setState({ 
      uid: authData.user.uid,
      //user existed  || created the account
      user: box.user || authData.user.uid
    })
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

    //if user is not the owner of the page
    if(this.state.uid !== this.state.chef) {
      return (
        <div>
          <p>this is not your recipe book :-)!</p>
        </div>
      )
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