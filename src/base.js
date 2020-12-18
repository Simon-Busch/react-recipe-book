import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCHMJ2zFwM8a4Uc9cvLvD3ZUw4jHK8uDNw',
  authDomain: 'recipe-book-66f01.firebaseapp.com',
  databaseURL: 'recipe-book-66f01'
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
