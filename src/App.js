import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ThemeProvider } from 'styled-components'

import theme from './constants/theme'
import HomeScreen from './views/home'
import WhishlistScreen from './views/wishlist'
import LibraryScreen from './views/library'
import CartScreen from './views/cart'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Fav" component={WhishlistScreen} />
          <Tab.Screen name="Lib" component={LibraryScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>

    // <BrowserRouter>
    //   <Navigation />
    //   <Switch>
    //     <Route exact path={routes.HOME} component={HomePage} />
    //     <Route path={routes.LOGIN} component={LoginPage} />
    //     <Route path={routes.SIGN_UP} component={SignUpPage} />
    //     <Route path={routes.PROFILE} component={ProfilePage} />
    //     <Route path={routes.EVENT} component={EventPage} />
    //     <Route path={routes.PASSWORD_CHANGE} component={PasswordChangePage} />
    //     <Route path={routes.PASSWORD_FORGOT} component={PasswordForgotPage} />
    //     <Route component={NotFound} />
    //   </Switch>
    // </BrowserRouter>
  )
}
