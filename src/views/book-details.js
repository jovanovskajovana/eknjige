import React from 'react'

import NavigatinHeader from '../components/NavigationHeader'
import { ScreenLayout, ViewLayout, TextLayout } from '../styles/ViewLayout'

const BookDetailsScreen = () => (
  <ScreenLayout>
    <NavigatinHeader backBtn />
    <ViewLayout>
      <TextLayout>BookDetails</TextLayout>
    </ViewLayout>
  </ScreenLayout>
)

export default BookDetailsScreen
