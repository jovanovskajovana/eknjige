import React, { useState, useEffect } from 'react'

import firebase from '../api/firebase'
import NavigatinHeader from '../components/NavigationHeader'
import { ScreenLayout, ViewLayout, TextLayout, Link } from '../styles/ViewLayout'

const HomeScreen = () => {
  const [user, setUser] = useState()

  const [books, setBooks] = useState([])

  useEffect(() => {
    const user = firebase.getCurrentUser()
    if (user) {
      firebase
        .getUser(user.uid)
        .get()
        .then((querySnapshot) => {
          setUser(querySnapshot.data())
        })
    }
  })

  // useEffect(() => {
  //   const unsubscribe = firebase.getBooks().onSnapshot((querySnapshot) => {
  //     querySnapshot.forEach((documentSnapshot) => {
  //       setBooks({ ...documentSnapshot.data(), uid: documentSnapshot.id })
  //     })
  //   })
  //   return unsubscribe()
  // })

  return (
    <ScreenLayout>
      <NavigatinHeader profileBtn />
      <ViewLayout>
        <TextLayout>Hi, {user?.name}!</TextLayout>
      </ViewLayout>
    </ScreenLayout>
  )
}

export default HomeScreen
