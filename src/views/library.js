import React from 'react'

import NavigatinHeader from '../components/NavigationHeader'
import { ScreenLayout, ViewLayout, TextLayout } from '../styles/ViewLayout'

const LibraryScreen = () => (
  <ScreenLayout>
    <NavigatinHeader profileBtn />
    <ViewLayout>
      <TextLayout>Library</TextLayout>
    </ViewLayout>
  </ScreenLayout>
)

export default LibraryScreen
