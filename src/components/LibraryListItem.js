import React from 'react'

import { ListItemLayout } from '../styles/ListLayout'
import { TextLayout } from '../styles/ViewLayout'

const LibraryListItem = ({ item }) => {
  return (
    <ListItemLayout
      onPress={() => {
        navigation.navigate('Reader', {
          book: item,
        })
      }}
    >
      <TextLayout>{item.title}</TextLayout>
    </ListItemLayout>
  )
}

export default LibraryListItem
