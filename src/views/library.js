import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'

import firebase from '../api/firebase'
import useLocales from '../hooks/useLocales'
import NavigatinHeader from '../components/NavigationHeader'
import IconLib from '../components/icons/Lib'
import Loader from '../components/Loader'
import Error from '../components/Error'
import LibraryListItem from '../components/LibraryListItem'
import { ScreenScrollable, ViewLayout, IconWrapper } from '../styles/ViewLayout'
import { ListLayout } from '../styles/LibraryListLayout'
import { Title, InfoText } from '../styles/Typography'

const screenHeight = Dimensions.get('window').height

const LibraryScreen = () => {
  const { t } = useLocales()
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const listener = firebase.getPurchasedBooks((querySnapshot) => {
      const books = []

      querySnapshot.forEach((document) => {
        document
          .data()
          .book.get()
          .then((documentBook) => {
            books.push({
              ...documentBook.data(),
              key: documentBook.id,
            })
            setBooks(books)
            setIsLoading(false)
          })
      })
    })
    return () => listener()
  }, [])

  if (isLoading) return <Loader />

  if (error) return <Error />

  if (!(books.length > 0))
    return (
      <ScreenScrollable>
        <NavigatinHeader profileBtn />
        <ViewLayout style={{ minHeight: screenHeight - 220 }}>
          <IconWrapper>
            <IconLib />
          </IconWrapper>
          <InfoText marginLeft="auto" marginRight="auto">
            {t('library.noBooks')}
          </InfoText>
        </ViewLayout>
      </ScreenScrollable>
    )

  return (
    <ScreenScrollable>
      <NavigatinHeader profileBtn />
      <Title textHiglight maxWidth="100%" marginTop="46px">
        {t('library.title')}
      </Title>
      <ListLayout
        data={books}
        keyExtractor={(item) => item.key}
        numColumns={2}
        horizontal={false}
        renderItem={({ item }) => <LibraryListItem item={item} />}
      />
    </ScreenScrollable>
  )
}

export default LibraryScreen
