import React from 'react'
import { Button } from 'react-native'

import { ListItemLayout } from '../styles/ListLayout'
import { TextLayout } from '../styles/ViewLayout'

const CartListItem = ({ item }) => {
  handleRemove = () => {
    console.log('clicked')
  }
  return (
    <ListItemLayout>
      <TextLayout>{item.title}</TextLayout>
      <Button title="Remove" onPress={() => handleRemove} />
    </ListItemLayout>
  )
}

export default CartListItem
