import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from '../views/home'
import WhishlistScreen from '../views/wishlist'
import LibraryScreen from '../views/library'
import CartScreen from '../views/cart'

const Tab = createBottomTabNavigator()

const TabNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Fav" component={WhishlistScreen} />
      <Tab.Screen name="Lib" component={LibraryScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  </NavigationContainer>
)

export default TabNavigation
