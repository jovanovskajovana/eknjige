import React from 'react'

import NavigatinHeader from '../components/NavigationHeader'
import { ScreenLayout, ViewLayout, TextLayout } from '../styles/ViewLayout'

const PurchaseScreen = () => (
  <ScreenLayout>
    <NavigatinHeader backBtn />
    <ViewLayout>
      <TextLayout>Purchase</TextLayout>
    </ViewLayout>
  </ScreenLayout>
)

export default PurchaseScreen
