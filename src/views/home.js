import React, { useState, useEffect } from 'react'
import { Button } from 'react-native'

import { ViewLayout, TextLayout } from '../styles/ViewLayout'

import firebase from '../api/firebase'

const HomeScreen = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(firebase.getCurrentUser)
  }, [])

  const handleLogout = () => {
    firebase.signOut()
  }

  return (
    <ViewLayout>
      <TextLayout>Home</TextLayout>
      <TextLayout>Hi, {user && user.email}!</TextLayout>
      <Button title="Log Out" onPress={handleLogout} />
    </ViewLayout>
  )
}

export default HomeScreen
