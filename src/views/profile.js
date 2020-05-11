import React, { useState, useEffect } from 'react'
import { Button } from 'react-native'

import NavigatinHeader from '../components/NavigationHeader'
import { ScreenLayout, ViewLayout, TextLayout } from '../styles/ViewLayout'
import firebase from '../api/firebase'

const ProfileScreen = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(firebase.getCurrentUser)
  }, [])

  const handleLogout = () => {
    firebase.signOut()
  }

  return (
    <ScreenLayout>
      <NavigatinHeader backBtn />
      <ViewLayout>
        <TextLayout>Profile</TextLayout>
        <TextLayout>{user?.displayName}</TextLayout>
        <TextLayout>{user?.email}</TextLayout>
        <Button title="Log Out" onPress={handleLogout} />
      </ViewLayout>
    </ScreenLayout>
  )
}

export default ProfileScreen
