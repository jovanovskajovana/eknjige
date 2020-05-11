import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import LoginScreen from '../views/login'
import SignUpScreen from '../views/signup'
import PasswordResetScreen from '../views/password-reset'
import HomeScreen from '../views/home'
import WhishlistScreen from '../views/wishlist'
import LibraryScreen from '../views/library'
import BookDetailsScreen from '../views/book-details'
import ReaderScreen from '../views/reader'
import ProfileScreen from '../views/profile'
import CartScreen from '../views/cart'
import PurchaseScreen from '../views/purchase'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const NavigationMain = ({ user }) => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      {user ? (
        <>
          <Stack.Screen name="Home">
            {() => (
              <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Fav" component={WhishlistScreen} />
                <Tab.Screen name="Lib" component={LibraryScreen} />
                <Tab.Screen name="Cart" component={CartScreen} />
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Purchase" component={PurchaseScreen} />
          <Stack.Screen name="Reader" component={ReaderScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="PasswordReset" component={PasswordResetScreen} />
        </>
      )}
    </Stack.Navigator>
  </NavigationContainer>
)

export default NavigationMain
