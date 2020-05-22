import React, { useEffect } from 'react'
import { Button } from 'react-native'

import NavigatinHeader from '../components/NavigationHeader'
import { ScreenLayout, ViewLayout, TextLayout } from '../styles/ViewLayout'

const BookDetailsScreen = ({ route }) => {
  const { book } = route.params

  const addToWhishlist = (item) => {
    console.log(item.key)
  }

  return (
    <ScreenLayout>
      <NavigatinHeader backBtn />
      <ViewLayout>
        <TextLayout>{book?.title}</TextLayout>
        <TextLayout>{book?.author}</TextLayout>
        <TextLayout>{book?.description}</TextLayout>
        <Button title="Favorite" onPress={() => addToWhishlist(item)} />
      </ViewLayout>
    </ScreenLayout>
  )
}

export default BookDetailsScreen
