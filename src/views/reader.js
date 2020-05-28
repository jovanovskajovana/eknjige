import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import Pdf from 'react-native-pdf'

import NavigatinHeader from '../components/NavigationHeader'
import { ReaderLayout, ViewLayout } from '../styles/Reader'

const ReaderScreen = ({ route }) => {
  const { fileUrl } = route.params

  const source = {
    uri: fileUrl,
    cache: true,
  }

  return (
    <ReaderLayout>
      <NavigatinHeader backBtn />
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
    </ReaderLayout>
  )
}

const styles = StyleSheet.create({
  pdf: {
    flex: 20,
    marginTop: 20,
    width: Dimensions.get('window').width,
  },
})

export default ReaderScreen
