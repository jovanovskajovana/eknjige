import React, { useState, useEffect } from 'react'
import { Button } from 'react-native'

import NavigatinHeader from '../components/NavigationHeader'
import { ScreenLayout, ViewLayout, TextLayout } from '../styles/ViewLayout'
import firebase from '../api/firebase'

const ProfileScreen = () => {
  const [user, setUser] = useState()

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

  const handleLogout = () => {
    firebase.signOut()
  }

  return (
    <ScreenLayout>
      <NavigatinHeader backBtn />
      <ViewLayout>
        <TextLayout>Profile</TextLayout>
        <TextLayout>
          {user?.name} {user?.surname}
        </TextLayout>
        <TextLayout>{user?.email}</TextLayout>
        <Button title="Log Out" onPress={handleLogout} />
      </ViewLayout>
    </ScreenLayout>
  )
}

export default ProfileScreen
