import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  ListItemLayout,
  Wrapper,
  CoverImage,
  DataText,
} from '../styles/LibraryListLayout'

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
      <Wrapper width="100%">
        <CoverImage
          source={{
            uri: `${item.cover_img_url}`,
          }}
        />
      </Wrapper>
      <Wrapper width="100%">
        <DataText title marginBottom="5px">
          {item.title}
        </DataText>
        <DataText>{item.author}</DataText>
      </Wrapper>
    </ListItemLayout>
  )
}

export default LibraryListItem
