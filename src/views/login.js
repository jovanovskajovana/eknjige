import React, { useState } from 'react'
import { TextInput, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import firebase from '../api/firebase'
import { ViewLayout, TextLayout } from '../styles/ViewLayout'

const LoginScreen = () => {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  // const isInvalid = password === '' || email === '' || username === ''

  const handleLogin = () => {
    firebase
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Home'))
      .catch((error) => {
        setErrorMessage(error.message)
      })
  }

  return (
    <ViewLayout>
      <TextLayout>Login</TextLayout>
      {errorMessage && <TextLayout>{errorMessage}</TextLayout>}
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        autoCapitalize="none"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Submit" onPress={handleLogin} />
      <Button
        title="Don't have an account? Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
    </ViewLayout>
  )
}

export default LoginScreen
