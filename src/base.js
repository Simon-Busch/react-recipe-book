import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCrD_X1bFTxwWhx8SH64lFH8y_uQKWuLD4',
  authDomain: 'recipe-book-2bbb6.firebaseapp.com',
  databaseURL: 'https://recipe-book-2bbb6-default-rtdb.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
