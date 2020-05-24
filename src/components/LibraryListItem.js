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
          fileUrl: item.file_url,
        })
      }}
    >
      <TextLayout>{item.title}</TextLayout>
    </ListItemLayout>
  )
}

export default LibraryListItem
