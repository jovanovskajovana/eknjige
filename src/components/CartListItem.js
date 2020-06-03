import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import { formatMoney } from '../utils/moneyFormatter'
import { Border } from '../styles/ViewLayout'
import {
  ListItemLayout,
  Wrapper,
  PriceWrapper,
  CoverImage,
  DataText,
  PriceBig,
  PriceSmall,
} from '../styles/CartListLayout'
import { ButtonRemove, RemoveText } from '../styles/Buttons'

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
    <>
      <ListItemLayout>
        <Wrapper width="27%">
          <CoverImage
            source={{
              uri: `${item.cover_img_url}`,
            }}
          />
        </Wrapper>
        <Wrapper width="73%">
          <Wrapper flexRow width="100%">
            <Wrapper width="70%">
              <DataText title marginBottom="5px">
                {item.title}
              </DataText>
              <DataText>{item.author}</DataText>
            </Wrapper>
            <Wrapper width="30%">
              <ButtonRemove onPress={() => handleRemove(item)}>
                <RemoveText>X</RemoveText>
              </ButtonRemove>
            </Wrapper>
          </Wrapper>
          <PriceWrapper>
            <PriceSmall>{item.quantity} x </PriceSmall>
            <PriceBig>{formatMoney(item.price)}</PriceBig>
          </PriceWrapper>
        </Wrapper>
      </ListItemLayout>
      <Border />
    </>
  )
}

export default CartListItem
