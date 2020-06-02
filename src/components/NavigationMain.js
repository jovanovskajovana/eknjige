import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import LoginScreen from '../views/login'
import SignUpScreen from '../views/signup'
import HomeScreen from '../views/home'
import WhishlistScreen from '../views/wishlist'
import LibraryScreen from '../views/library'
import BookDetailsScreen from '../views/book-details'
import ReaderScreen from '../views/reader'
import ProfileScreen from '../views/profile'
import CartScreen from '../views/cart'

import IconHome from './icons/Home'
import IconFav from './icons/Fav'
import IconLib from './icons/Lib'
import IconCart from './icons/Cart'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const NavigationMain = ({ user }) => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      {user ? (
        <>
          <Stack.Screen name="Home">
            {() => (
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ color }) => {
                    if (route.name === 'Home') {
                      return <IconHome fill={color} />
                    } else if (route.name === 'Fav') {
                      return <IconFav fill={color} />
                    } else if (route.name === 'Lib') {
                      return <IconLib fill={color} />
                    } else if (route.name === 'Cart') {
                      return <IconCart fill={color} />
                    }
                  },
                })}
                tabBarOptions={{
                  showLabel: false,
                  activeTintColor: '#a19bf8',
                  inactiveTintColor: '#cacaca',
                  style: { height: 85, paddingTop: 20, borderTopColor: '#fff' },
                }}
              >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Fav" component={WhishlistScreen} />
                <Tab.Screen name="Lib" component={LibraryScreen} />
                <Tab.Screen name="Cart" component={CartScreen} />
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Reader" component={ReaderScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  </NavigationContainer>
)

export default NavigationMain
