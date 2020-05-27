import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSafeArea } from 'react-native-safe-area-context'

import firebase from '../api/firebase'
import useLocales from '../hooks/useLocales'
import Input from '../components/Input'
import { ScreenLayout, ViewLayout, TextLayout } from '../styles/ViewLayout'
import { ButtonPrimary, ButtonText, ButtonLink, LinkText } from '../styles/Buttons'
import { Title, Subtitle, ErrorMessage } from '../styles/Typography'

const LoginScreen = () => {
  const { t } = useLocales()
  const navigation = useNavigation()
  const insets = useSafeArea()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const isInvalid = password === '' || email === ''

  const handleLogin = () => {
    firebase
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Home'))
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          setErrorMessage('Invalid email address.')
        } else if (error.code === 'auth/network-request-failed') {
          setErrorMessage('No internet connection!')
        } else {
          setErrorMessage('Incorrect credentials.')
        }
      })
  }

  const handlePasswordReset = () => {
    firebase
      .resetPassword(email)
      .then(() => setErrorMessage('Check your inbox!'))
      .catch((error) => {
        setErrorMessage(error.message)
      })
  }

  return (
    <ScreenLayout dark paddingTop={insets.top + 20}>
      <ViewLayout>
        <Title alignCenter marginBottom="10px">
          {t('appName')}
        </Title>
        <Subtitle alignCenter textSecondary marginBottom="40px" maxWidth="55%">
          {t('login.subtitle')}
        </Subtitle>
        <Input
          placeholder="Email"
          autoCapitalize="none"
          value={email}
          handleChange={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          autoCapitalize="none"
          secureEntry
          value={password}
          handleChange={(text) => setPassword(text)}
        />
        {errorMessage && <ErrorMessage marginLeft="10%">{errorMessage}</ErrorMessage>}
        <ButtonLink oonPress={handlePasswordReset}>
          <LinkText>{t('login.passwordForgotButton')}</LinkText>
        </ButtonLink>
        <ButtonPrimary maxWidth="80%" disabled={isInvalid} onPress={handleLogin}>
          <ButtonText>{t('login.loginButton')}</ButtonText>
        </ButtonPrimary>
        <ButtonLink onPress={() => navigation.navigate('SignUp')}>
          <LinkText>{t('login.signupButton')}</LinkText>
        </ButtonLink>
      </ViewLayout>
    </ScreenLayout>
  )
}

export default LoginScreen
