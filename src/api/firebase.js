import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

class Firebase {
  constructor() {
    this.auth = auth()
    this.db = firestore()
  }

  // *** Auth API ***

  createUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

  signInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  signInWithSocialAccount = (provider) =>
    this.auth.signInWithPopup(new app.auth[`${provider}AuthProvider`]())

  signOut = () => this.auth.signOut()

  getAuthtUser = (authUser) => this.auth.onAuthStateChanged(authUser)

  getCurrentUser = (authUser) => this.auth.currentUser

  resetPassword = (email) => this.auth.sendPasswordResetEmail(email)

  updatePassword = (password) => this.auth.currentUser.updatePassword(password)

  // *** Db API ***

  getBooks = () => this.db.collection('Books').get()

  getBookDetails = (uid) => this.db.collection('Books').doc(uid).get()
}

const api = new Firebase()
export default api
