import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSafeArea } from 'react-native-safe-area-context'

import firebase from '../api/firebase'
import useLocales from '../hooks/useLocales'
import Input from '../components/Input'
import { ScreenLayout, ViewLayout } from '../styles/ViewLayout'
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
          setErrorMessage(`${t('errorMessages.invalidEmail')}`)
        } else if (error.code === 'auth/network-request-failed') {
          setErrorMessage(`${t('errorMessages.noInternetConnection')}`)
        } else {
          setErrorMessage(`${t('errorMessages.incorrectCredentials')}`)
        }
      })
  }

  const handlePasswordReset = () => {
    firebase
      .resetPassword(email)
      .then(() => setErrorMessage(`${t('errorMessages.checkInbox')}`))
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          setErrorMessage(`${t('errorMessages.emailMustBeProvided')}`)
        } else if (error.code === 'auth/network-request-failed') {
          setErrorMessage(`${t('errorMessages.noInternetConnection')}`)
        } else {
          setErrorMessage(`${t('errorMessages.incorrectCredentials')}`)
        }
      })
  }

  return (
    <ScreenLayout dark paddingTop={insets.top + 20}>
      <ViewLayout>
        <Title alignCenter marginBottom="10px">
          {t('appName')}
        </Title>
        <Subtitle alignCenter textPale marginBottom="40px" maxWidth="55%">
          {t('login.subtitle')}
        </Subtitle>
        <Input
          placeholder={t('signup.email')}
          autoCapitalize="none"
          value={email}
          handleChange={(text) => setEmail(text)}
        />
        <Input
          placeholder={t('signup.password')}
          autoCapitalize="none"
          secureEntry
          value={password}
          handleChange={(text) => setPassword(text)}
        />
        {errorMessage && <ErrorMessage marginLeft="10%">{errorMessage}</ErrorMessage>}
        <ButtonLink onPress={handlePasswordReset}>
          <LinkText>{t('login.passwordForgotButton')}</LinkText>
        </ButtonLink>
        <ButtonPrimary maxWidth="65%" disabled={isInvalid} onPress={handleLogin}>
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
