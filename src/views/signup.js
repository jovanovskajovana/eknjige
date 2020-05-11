import React, { useState } from 'react'
import { TextInput, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import firebase from '../api/firebase'
import { ScreenLayout, TextLayout } from '../styles/ViewLayout'

const SignUpScreen = () => {
  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const isInvalid = password === '' || email === '' || name === '' || surname === ''

  const handleSignUp = () => {
    firebase
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Home'))
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          setErrorMessage('That email address is already in use!')
        }

        if (error.code === 'auth/invalid-email') {
          setErrorMessage('That email address is invalid!')
        }

        setErrorMessage(error.message)
      })
  }

  return (
    <ScreenLayout>
      <TextLayout>Sign Up</TextLayout>
      {errorMessage && <TextLayout>{errorMessage}</TextLayout>}
      <TextInput placeholder="Name" value={name} onChangeText={(text) => setName(text)} />
      <TextInput
        placeholder="Surname"
        value={surname}
        onChangeText={(text) => setSurname(text)}
      />
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button disabled={isInvalid} title="Submit" onPress={handleSignUp} />
      <Button
        title="Already have an account? Login"
        onPress={() => navigation.navigate('Login')}
      />
    </ScreenLayout>
  )
}

export default SignUpScreen
