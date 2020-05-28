import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import { formatMoney } from '../utils/moneyFormatter'
import { ListItemLayout, Wrapper, CoverImage, DataText } from '../styles/ListLayout'
import { ButtonRemove, LinkText } from '../styles/Buttons'
import { Greeting } from '../styles/Typography'

const CartListItem = ({ item }) => {
  const handleRemove = async (item) => {
    try {
      const storedDataJSON = await AsyncStorage.getItem('cartItems')
      const storedData = JSON.parse(storedDataJSON)

      if (storedData) {
        const reducedItems = storedData.map((storageItem) => {
          if (storageItem.key === item.key && storageItem.quantity > 0) {
            storageItem.quantity -= 1
          }
          return storageItem
        })

        const updatedItems = reducedItems.filter((item) => {
          return item.quantity > 0
        })

        await AsyncStorage.setItem('cartItems', JSON.stringify(updatedItems))
      }
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
      </Wrapper>
      <Wrapper width="25%">
        <ButtonRemove onPress={() => handleRemove(item)}>
          <LinkText>X</LinkText>
        </ButtonRemove>
        <Greeting marginLeft="auto" marginTop="auto">
          {item.quantity} x {formatMoney(item.price)}
        </Greeting>
      </Wrapper>
    </ListItemLayout>
  )
}

export default CartListItem
