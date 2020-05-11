import React from 'react'

import NavigatinHeader from '../components/NavigationHeader'
import { ScreenLayout, ViewLayout, TextLayout } from '../styles/ViewLayout'

const ReaderScreen = () => (
  <ScreenLayout>
    <NavigatinHeader backBtn />
    <ViewLayout>
      <TextLayout>Reader</TextLayout>
    </ViewLayout>
  </ScreenLayout>
)

export default ReaderScreen
