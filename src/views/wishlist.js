import React from 'react'

import NavigatinHeader from '../components/NavigationHeader'
import { ScreenLayout, TextLayout, ViewLayout } from '../styles/ViewLayout'

const WishlistScreen = () => (
  <ScreenLayout>
    <NavigatinHeader profileBtn />
    <ViewLayout>
      <TextLayout>Wishlist</TextLayout>
    </ViewLayout>
  </ScreenLayout>
)

export default WishlistScreen
