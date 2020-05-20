import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native'

import { ListItemLayout } from '../styles/ListLayout'
import { TextLayout } from '../styles/ViewLayout'

const ListItem = ({ item }) => {
  const navigation = useNavigation()

  const addToCart = async (item) => {
    let cartItems = []
    try {
      const storedDataJSON = await AsyncStorage.getItem('cartItems')
      const storedData = JSON.parse(storedDataJSON)

      if (storedData) {
        const current = storedData.find((storageItem) => storageItem.key === item.key)

        if (current) {
          cartItems = storedData.map((storageItem) => {
            if (storageItem.key === current.key) {
              storageItem.quantity += 1
            }
            return storageItem
          })
        } else {
          cartItems = [...storedData, { ...item, quantity: 1 }]
        }

        await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems))
      } else {
        cartItems.push({
          ...item,
          quantity: 1,
        })

        await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems))
      }

      navigation.navigate('Cart', { refresh: true })
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <ListItemLayout
      onPress={() => {
        navigation.navigate('BookDetails', {
          book: item,
        })
      }}
    >
      <TextLayout>{item.title}</TextLayout>
      <TextLayout>{item.author}</TextLayout>
      <Button title="Buy" onPress={() => addToCart(item)} />
    </ListItemLayout>
  )
}

export default ListItem
