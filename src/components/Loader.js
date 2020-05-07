import React from 'react'
import { ActivityIndicator } from 'react-native'

import { ViewLayout, TextLayout } from '../styles/ViewLayout'

const Loader = () => (
  <ViewLayout>
    <TextLayout>Loading</TextLayout>
    <ActivityIndicator size="large" />
  </ViewLayout>
)

export default Loader
