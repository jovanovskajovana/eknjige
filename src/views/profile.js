import React, { useState, useEffect } from 'react'
import { Button } from 'react-native'

import firebase from '../api/firebase'
import NavigatinHeader from '../components/NavigationHeader'
import Loader from '../components/Loader'
import { ScreenScrollable, ViewLayout } from '../styles/ViewLayout'
import { Paragraph } from '../styles/Typography'

const ProfileScreen = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

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

  if (isLoading) return <Loader />

  if (error) return <Error />

  return (
    <ScreenScrollable>
      <NavigatinHeader backBtn />
      <ViewLayout>
        <Paragraph>
          {user?.name} {user?.surname}
        </Paragraph>
        <Paragraph>{user?.email}</Paragraph>
        <Button title="Log Out" onPress={handleLogout} />
      </ViewLayout>
    </ScreenScrollable>
  )
}

export default ProfileScreen
