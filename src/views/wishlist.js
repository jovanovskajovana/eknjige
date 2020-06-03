import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'

import firebase from '../api/firebase'
import useLocales from '../hooks/useLocales'
import NavigatinHeader from '../components/NavigationHeader'
import IconFav from '../components/icons/Fav'
import ListItem from '../components/ListItem'
import { ScreenScrollable, ViewLayout, IconWrapper } from '../styles/ViewLayout'
import { ListLayout } from '../styles/ListLayout'
import { Title, InfoText } from '../styles/Typography'

const screenHeight = Dimensions.get('window').height

const WishlistScreen = () => {
  const { t } = useLocales()
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    let listener
    firebase.getFavoriteBooks(
      (querySnapshot) => {
        const books = []

        if (querySnapshot.empty) {
          setBooks(books)
        } else {
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
        }
      },
      (unsubcribe) => (listener = unsubcribe)
    )

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
            <IconFav />
          </IconWrapper>
          <InfoText marginLeft="auto" marginRight="auto">
            {t('whishlist.noBooks')}
          </InfoText>
        </ViewLayout>
      </ScreenScrollable>
    )

  return (
    <ScreenScrollable>
      <NavigatinHeader profileBtn />
      <Title textHiglight maxWidth="50%" marginTop="46px">
        {t('whishlist.title')}
      </Title>
      <ListLayout
        data={books}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </ScreenScrollable>
  )
}

export default WishlistScreen
