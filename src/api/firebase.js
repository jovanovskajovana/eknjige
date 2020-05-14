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

  sendEmailVerification = () => this.auth.currentUser.sendEmailVerification()

  signOut = () => this.auth.signOut()

  getAuthState = (authUser) => this.auth.onAuthStateChanged(authUser)

  resetPassword = (email) => this.auth.sendPasswordResetEmail(email)

  updatePassword = (password) => this.auth.currentUser.updatePassword(password)

  // *** Db API ***

  getUser = (uid) => this.db.collection('users').doc(uid)

  getCurrentUser = (userCallback) =>
    this.getAuthState((authUser) => {
      if (authUser) {
        this.getUser(authUser.uid).onSnapshot((querySnapshot) => {
          userCallback(querySnapshot.data())
        })
      }
    })

  getBooks = () => this.db.collection('books')

  getBookDetails = (uid) => this.db.doc(`books/${uid}`)
  // getBookDetails = (uid) => this.db.collection('Books').doc(uid) isto kako User
}

const api = new Firebase()
export default api
