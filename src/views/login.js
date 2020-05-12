import React, { useState } from 'react'
import { TextInput, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSafeArea } from 'react-native-safe-area-context'

import firebase from '../api/firebase'
import { ScreenLayout, TextLayout } from '../styles/ViewLayout'

const LoginScreen = () => {
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
        setErrorMessage(error.message)
      })
  }

  return (
    <ScreenLayout paddingTop={insets.top + 20}>
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
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button disabled={isInvalid} title="Submit" onPress={handleLogin} />
      <Button
        title="Don't have an account? Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
    </ScreenLayout>
  )
}

export default LoginScreen
