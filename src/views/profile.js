import React, { useState, useEffect } from 'react'
import { Button } from 'react-native'

import NavigatinHeader from '../components/NavigationHeader'
import Loader from '../components/Loader'
import { ScreenLayout, ViewLayout, TextLayout } from '../styles/ViewLayout'
import firebase from '../api/firebase'

const ProfileScreen = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const handleLogout = () => {
    firebase.signOut()
  }

  useEffect(() => {
    const listener = firebase.getCurrentUser((authUser) => {
      setUser(authUser)
      if (isLoading) setIsLoading(false)
    })
    return () => listener()
  }, [])

  return (
    <ScreenLayout>
      <NavigatinHeader backBtn />
      {isLoading ? (
        <Loader />
      ) : (
        <ViewLayout>
          <TextLayout>Profile</TextLayout>
          <TextLayout>
            {user?.name} {user?.surname}
          </TextLayout>
          <TextLayout>{user?.email}</TextLayout>
          <Button title="Log Out" onPress={handleLogout} />
        </ViewLayout>
      )}
    </ScreenLayout>
  )
}

export default ProfileScreen
