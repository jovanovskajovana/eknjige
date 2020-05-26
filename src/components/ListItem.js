import React, { useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native'

import { formatMoney } from '../utils/moneyFormatter'
import { ListItemLayout } from '../styles/ListLayout'
import { TextLayout } from '../styles/ViewLayout'

const ListItem = ({ item }) => {
  const navigation = useNavigation()
  const [refresh, setRefresh] = useState(false)

  const addToCart = async (item) => {
    let cartItems = []
    try {
      const storedDataJSON = await AsyncStorage.getItem('cartItems')
      const storedData = JSON.parse(storedDataJSON)

      if (storedData) {
        const currentItem = storedData.find((storageItem) => storageItem.key === item.key)

        if (currentItem) {
          cartItems = storedData.map((storageItem) => {
            if (storageItem.key === currentItem.key) {
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

      setRefresh(!refresh)
      navigation.navigate('Cart', { refresh })
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
      <TextLayout>{formatMoney(item.price)}</TextLayout>
      <Button title="Buy" onPress={() => addToCart(item)} />
    </ListItemLayout>
  )
}

export default ListItem
