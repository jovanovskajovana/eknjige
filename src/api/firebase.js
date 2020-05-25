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
        this.getUser(authUser.uid).onSnapshot((documentSnapshot) => {
          userCallback(documentSnapshot.data())
        })
      }
    })

  getBooks = () => this.db.collection('books')

  getFavoriteBooks = (booksCallback, unsubscribe) =>
    this.getAuthState((authUser) => {
      if (authUser) {
        this.getUser(authUser.uid).onSnapshot((documentSnapshot) => {
          const listener = documentSnapshot.ref
            .collection('favoriteBooks')
            .onSnapshot((querySnapshot) => {
              booksCallback(querySnapshot)
            })
          unsubscribe(listener)
        })
      }
    })

  setFavoriteBook = (bookKey) =>
    this.getAuthState((authUser) => {
      if (authUser) {
        this.getUser(authUser.uid)
          .collection('favoriteBooks')
          .doc(bookKey)
          .set({ book: this.db.doc(`books/${bookKey}`) })
      }
    })

  removeFavoriteBook = (bookKey) =>
    this.getAuthState((authUser) => {
      if (authUser) {
        this.getUser(authUser.uid).collection('favoriteBooks').doc(bookKey).delete()
      }
    })

  getPurchasedBooks = (booksCallback) =>
    this.getAuthState((authUser) => {
      if (authUser) {
        this.getUser(authUser.uid).onSnapshot((documentSnapshot) => {
          documentSnapshot.ref
            .collection('purchasedBooks')
            .onSnapshot((querySnapshot) => {
              booksCallback(querySnapshot)
            })
        })
      }
    })

  setPurchasedBook = (bookKey) =>
    this.getAuthState((authUser) => {
      if (authUser) {
        this.getUser(authUser.uid)
          .collection('purchasedBooks')
          .doc(bookKey)
          .set({ book: this.db.doc(`books/${bookKey}`) })
      }
    })
}

const api = new Firebase()
export default api
