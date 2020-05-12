import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'

import firebase from './api/firebase'
import theme from './constants/theme'
import NavigationMain from './components/NavigationMain'
import Loader from './components/Loader'

const App = () => {
  const [user, setUser] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const listener = firebase.getAuthState((authUser) => {
      setUser(authUser)
      if (isLoading) setIsLoading(false)
    })
    return () => listener()
  })

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        {isLoading ? <Loader /> : <NavigationMain user={user} />}
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
