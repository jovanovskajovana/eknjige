import React, { useState, useEffect } from 'react'

import firebase from '../api/firebase'
import useLocales from '../hooks/useLocales'
import NavigatinHeader from '../components/NavigationHeader'
import Loader from '../components/Loader'
import { ScreenScrollable, ViewSolidLayout } from '../styles/ViewLayout'
import { ButtonLink, LinkText } from '../styles/Buttons'
import { Greeting } from '../styles/Typography'

const ProfileScreen = () => {
  const { t } = useLocales()
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
      <ViewSolidLayout>
        <Greeting marginLeft="auto" marginRight="auto">
          {user?.name} {user?.surname}
        </Greeting>
        <Greeting marginLeft="auto" marginRight="auto">
          {user?.email}
        </Greeting>
        <ButtonLink onPress={handleLogout}>
          <LinkText textHiglight>{t('profile.logout')}</LinkText>
        </ButtonLink>
      </ViewSolidLayout>
    </ScreenScrollable>
  )
}

export default ProfileScreen
