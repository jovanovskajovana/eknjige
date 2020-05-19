import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native'

import NavigatinHeader from '../components/NavigationHeader'
import CartListItem from '../components/CartListItem'
import ListItem from '../components/ListItem'
import { ScreenLayout, ViewLayout, TextLayout } from '../styles/ViewLayout'
import { ListLayout } from '../styles/ListLayout'

const CartScreen = () => {
  const navigation = useNavigation()
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    retrieveData()
    console.log(cartItems)
  }, [cartItems])

  const retrieveData = async () => {
    try {
      const storedDataJSON = await AsyncStorage.getItem('cartItems')
      const storedData = JSON.parse(storedDataJSON)
      if (storedDataJSON) {
        setCartItems(storedData)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleRemove = async (item) => {
    try {
      const storedDataJSON = await AsyncStorage.getItem('cartItems')
      const storedData = JSON.parse(storedDataJSON)
      if (storedDataJSON) {
        const updated = storedData.map((storageItem) => {
          if (storageItem.key === item.key) {
            storageItem.quantity -= 1
          }
          return storageItem
        })
        await AsyncStorage.setItem('cartItems', JSON.stringify(updated))
        setCartItems(updated)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <ScreenLayout>
      <NavigatinHeader profileBtn />
      {cartItems.length > 0 ? (
        <ViewLayout>
          {/* <ListLayout
            data={cartItems}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => <CartListItem item={item} />}
          /> */}
          {cartItems.map((item) => (
            <>
              <TextLayout>{item.title}</TextLayout>
              <TextLayout>{item.quantity}</TextLayout>
              <TextLayout>{item.key}</TextLayout>
              <Button title="Remove" onPress={() => handleRemove(item)} />
            </>
          ))}
          <Button title="Purchase" onPress={() => navigation.navigate('Purchase')} />
        </ViewLayout>
      ) : (
        <ViewLayout>
          <TextLayout>No books added</TextLayout>
        </ViewLayout>
      )}
    </ScreenLayout>
  )
}

export default CartScreen
