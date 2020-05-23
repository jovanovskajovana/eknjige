import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { ListItemLayout } from '../styles/ListLayout'
import { TextLayout } from '../styles/ViewLayout'

const LibraryListItem = ({ item }) => {
  const navigation = useNavigation()

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
