import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Button } from 'react-native'

import { ListItemLayout } from '../styles/ListLayout'
import { TextLayout } from '../styles/ViewLayout'

const CartListItem = ({ item }) => {
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
    <ListItemLayout>
      <TextLayout>{item.title}</TextLayout>
      <TextLayout>quantity: {item.quantity}</TextLayout>
      <Button title="Remove" onPress={() => handleRemove(item)} />
    </ListItemLayout>
  )
}

export default CartListItem
