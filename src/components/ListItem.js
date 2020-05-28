import React, { useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'

import useLocales from '../hooks/useLocales'
import { formatMoney } from '../utils/moneyFormatter'
import {
  ListItemLayout,
  Wrapper,
  CoverImage,
  DataText,
  Button,
  ButtonText,
} from '../styles/ListLayout'

const ListItem = ({ item }) => {
  const { t } = useLocales()
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
      <Wrapper width="25%">
        <CoverImage
          source={{
            uri: `${item.cover_img_url}`,
          }}
        />
      </Wrapper>
      <Wrapper width="50%">
        <DataText title marginBottom="5px">
          {item.title}
        </DataText>
        <DataText>{item.author}</DataText>
        <DataText>{formatMoney(item.price)}</DataText>
      </Wrapper>
      <Wrapper width="25%">
        <Button onPress={() => addToCart(item)}>
          <ButtonText>{t('buy')}</ButtonText>
        </Button>
      </Wrapper>
    </ListItemLayout>
  )
}

export default ListItem
