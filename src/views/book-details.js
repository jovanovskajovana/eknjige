import React, { useEffect } from 'react'

import NavigatinHeader from '../components/NavigationHeader'
import { ScreenLayout, ViewLayout, TextLayout } from '../styles/ViewLayout'

const BookDetailsScreen = ({ route }) => {
  const { book } = route.params
  return (
    <ScreenLayout>
      <NavigatinHeader backBtn />
      <ViewLayout>
        <TextLayout>{book?.title}</TextLayout>
        <TextLayout>{book?.author}</TextLayout>
        <TextLayout>{book?.description}</TextLayout>
      </ViewLayout>
    </ScreenLayout>
  )
}

export default BookDetailsScreen
