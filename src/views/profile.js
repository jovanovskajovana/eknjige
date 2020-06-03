import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'

import firebase from '../api/firebase'
import useLocales from '../hooks/useLocales'
import NavigatinHeader from '../components/NavigationHeader'
import Loader from '../components/Loader'
import Input from '../components/Input'
import { ScreenScrollable, ViewSolidLayout, Wrapper, Border } from '../styles/ViewLayout'
import { ProfileButton } from '../styles/HeaderLayout'
import { ButtonPrimary, ButtonText, ButtonLink, LinkText } from '../styles/Buttons'
import { Numbers, Paragraph } from '../styles/Typography'

const screenHeight = Dimensions.get('window').height

const ProfileScreen = () => {
  const { t } = useLocales()

  const [user, setUser] = useState(null)
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const updateData = () => {
    firebase
      .getUser(authUser.user.uid)
      .set({ name, surname, email })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          setErrorMessage(`${t('errorMessages.invalidEmail')}`)
        } else if (error.code === 'auth/email-already-in-use') {
          setErrorMessage(`${t('errorMessages.emailInUse')}`)
        } else if (error.code === 'auth/network-request-failed') {
          setErrorMessage(`${t('errorMessages.noInternetConnection')}`)
        } else {
          setErrorMessage(`${t('errorMessages.incorrectCredentials')}`)
        }
      })
  }

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
      <ViewSolidLayout style={{ minHeight: screenHeight }}>
        <Wrapper flexRow width="100%" marginTop="20px">
          <Wrapper width="20%">
            <ProfileButton />
          </Wrapper>
          <Wrapper width="80%" marginLeft="20px" marginTop="auto" marginBottom="auto">
            <Paragraph>
              {user?.name} {user?.surname}
            </Paragraph>
            <Paragraph textSecondary>{user?.email}</Paragraph>
          </Wrapper>
        </Wrapper>

        <Wrapper flexRow width="100%" marginTop="60px" marginBottom="60px">
          <Wrapper width="30%">
            <Numbers alignCenter marginBottom="10px">
              5
            </Numbers>
            <Paragraph textBold alignCenter>
              {t('profile.books')}
            </Paragraph>
          </Wrapper>
          <Wrapper width="30%">
            <Numbers alignCenter marginBottom="10px">
              2
            </Numbers>
            <Paragraph textBold alignCenter>
              {t('profile.read')}
            </Paragraph>
          </Wrapper>
          <Wrapper width="30%">
            <Numbers alignCenter marginBottom="10px">
              15
            </Numbers>
            <Paragraph textBold alignCenter>
              {t('profile.favorites')}
            </Paragraph>
          </Wrapper>
        </Wrapper>

        <Border />
        <Wrapper width="100%" marginTop="20px">
          <Input
            placeholder={t('signup.name')}
            value={name}
            fullWidth
            handleChange={(text) => setName(text)}
          />
          <Input
            placeholder={t('signup.surname')}
            value={surname}
            fullWidth
            handleChange={(text) => setSurname(text)}
          />
          <Input
            placeholder={t('signup.email')}
            autoCapitalize="none"
            value={email}
            fullWidth
            handleChange={(text) => setEmail(text)}
          />
          {errorMessage && (
            <ErrorMessage textDatk marginLeft="10%">
              {errorMessage}
            </ErrorMessage>
          )}

          <Wrapper flexRow width="100%">
            <ButtonLink
              onPress={handleLogout}
              style={{ marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' }}
            >
              <LinkText textHiglight>{t('profile.logout')}</LinkText>
            </ButtonLink>
            <ButtonPrimary
              maxWidth="40%"
              onPress={updateData}
              style={{ marginLeft: 'auto', marginRight: 0 }}
            >
              <ButtonText>{t('profile.save')}</ButtonText>
            </ButtonPrimary>
          </Wrapper>
        </Wrapper>
      </ViewSolidLayout>
    </ScreenScrollable>
  )
}

export default ProfileScreen
