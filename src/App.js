import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './constants/theme'
import { ViewLayout, TextLayout } from './styles/ViewLayout'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ViewLayout>
        <TextLayout>Hi there, Jovana</TextLayout>
      </ViewLayout>
    </ThemeProvider>
  )
}
