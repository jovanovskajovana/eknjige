import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import firebase from '../api/firebase'
import NavigatinHeader from '../components/NavigationHeader'
import { ScreenLayout, ViewLayout, TextLayout, Link } from '../styles/ViewLayout'

const HomeScreen = () => {
  const navigation = useNavigation()
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(firebase.getCurrentUser)
  }, [])

  return (
    <ScreenLayout>
      <NavigatinHeader profileBtn />
      <ViewLayout>
        {!user?.displayName ? (
          <>
            <TextLayout>Welcome! Let's update your</TextLayout>
            <Link onPress={() => navigation.navigate('Profile')}>profile</Link>
          </>
        ) : (
          <TextLayout>Hi, {user?.displayName}!</TextLayout>
        )}
      </ViewLayout>
    </ScreenLayout>
  )
}

export default HomeScreen
