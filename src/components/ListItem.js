import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native'

import { ListItemLayout } from '../styles/ListLayout'
import { TextLayout } from '../styles/ViewLayout'

const ListItem = ({ item }) => {
  const navigation = useNavigation()

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
      <Button
        title="Buy"
        onPress={() =>
          navigation.navigate('Cart', {
            book: item,
          })
        }
      />
    </ListItemLayout>
  )
}

export default ListItem
