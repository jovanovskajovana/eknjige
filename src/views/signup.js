import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSafeArea } from 'react-native-safe-area-context'

import firebase from '../api/firebase'
import useLocales from '../hooks/useLocales'
import Input from '../components/Input'
import { ScreenLayout, ViewLayout, TextLayout } from '../styles/ViewLayout'
import { ButtonPrimary, ButtonText, ButtonLink, LinkText } from '../styles/Buttons'
import { Title, Subtitle, ErrorMessage } from '../styles/Typography'

const SignUpScreen = () => {
  const { t } = useLocales()
  const navigation = useNavigation()
  const insets = useSafeArea()

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const isInvalid = password === '' || email === '' || name === '' || surname === ''

  const handleSignUp = () => {
    firebase
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) =>
        firebase.getUser(authUser.user.uid).set({ name, surname, email })
      )
      .then(() => firebase.sendEmailVerification())
      .then(() => navigation.navigate('Home'))
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

  return (
    <ScreenLayout dark paddingTop={insets.top + 20}>
      <ViewLayout>
        <Title alignCenter marginBottom="10px">
          {t('appName')}
        </Title>
        <Subtitle alignCenter textSecondary marginBottom="40px" maxWidth="55%">
          {t('signup.title')}
        </Subtitle>
        <Input placeholder="Name" value={name} handleChange={(text) => setName(text)} />
        <Input
          placeholder="Surname"
          value={surname}
          handleChange={(text) => setSurname(text)}
        />
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
        <ButtonPrimary maxWidth="65%" disabled={isInvalid} onPress={handleSignUp}>
          <ButtonText>{t('signup.signupButton')}</ButtonText>
        </ButtonPrimary>
        <ButtonLink onPress={() => navigation.navigate('Login')}>
          <LinkText>{t('signup.loginButton')}</LinkText>
        </ButtonLink>
      </ViewLayout>
    </ScreenLayout>
  )
}

export default SignUpScreen
