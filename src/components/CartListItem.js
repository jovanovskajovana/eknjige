import React from 'react'
import { Button } from 'react-native'

import { ListItemLayout } from '../styles/ListLayout'
import { TextLayout } from '../styles/ViewLayout'

const CartListItem = ({ item }) => {
  handleRemove = (item) => {
    console.log(item.key)
  }
  return (
    <ListItemLayout>
      <TextLayout>{item.title}</TextLayout>
      <TextLayout>quantity: {item.title}</TextLayout>
      <Button title="Remove" onPress={() => handleRemove(item)} />
    </ListItemLayout>
  )
}

export default CartListItem
