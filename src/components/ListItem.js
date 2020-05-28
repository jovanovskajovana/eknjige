import React, { useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'

import { formatMoney } from '../utils/moneyFormatter'
import {
  ListItemLayout,
  DataWrapper,
  CoverImage,
  DataText,
  Button,
} from '../styles/ListLayout'

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
      <CoverImage
        source={{
          uri: `${item.cover_img_url}`,
        }}
      />
      <DataWrapper>
        <DataText title>{item.title}</DataText>
        <DataText>{item.author}</DataText>
        <DataText>{formatMoney(item.price)}</DataText>
      </DataWrapper>
      <Button title="Buy" onPress={() => addToCart(item)} />
    </ListItemLayout>
  )
}

export default ListItem
