import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import Pdf from 'react-native-pdf'

import NavigatinHeader from '../components/NavigationHeader'
import { ScreenLayout, ViewLayout } from '../styles/ViewLayout'

const ReaderScreen = ({ route }) => {
  const { fileUrl } = route.params

  const source = {
    uri: fileUrl,
    cache: true,
  }

  return (
    <ScreenLayout>
      <NavigatinHeader backBtn />
      <ViewLayout style={styles.container}>
        <Pdf
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`)
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`)
          }}
          onError={(error) => {
            console.log(error)
          }}
          onPressLink={(uri) => {
            console.log(`Link presse: ${uri}`)
          }}
          style={styles.pdf}
        />
      </ViewLayout>
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
})

export default ReaderScreen
