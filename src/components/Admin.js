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

  componentDidMount () {
    //once the component it mounted
    // check if there is a auth status change
    firebase.auth().onAuthStateChanged(user => {
      // if user is logged in
      if (user) {
        this.handleAuth({ user })
      }
    })
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

  logOut = async () => {
    console.log('you are logged out')

    await firebase.auth().signOut()
    // uid back to null no will return login option
    this.setState({ uid: null })
  }

  render () {
    const { recipes, addRecipe, updateRecipe, loadSeed, deleteRecipe } = this.props

    const logOut = <button onClick={this.logOut}>Log out</button>

    //if user is not connected
    //there is no uid 
    if(!this.state.uid) {
      return <Login authenticate={this.authenticate}></Login>
    }

    //if user is not the owner of the page
    if(this.state.uid !== this.state.user) {
      return (
        <div>
          <p>this is not your recipe book :-)!</p>
          { logOut }
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
        { logOut }
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