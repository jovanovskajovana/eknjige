import React, { useState, useEffect } from 'react'

import firebase from '../api/firebase'
import useLocales from '../hooks/useLocales'
import NavigatinHeader from '../components/NavigationHeader'
import Loader from '../components/Loader'
import Error from '../components/Error'
import LibraryListItem from '../components/LibraryListItem'
import { ScreenScrollable, ViewLayout } from '../styles/ViewLayout'
import { Title, Greeting } from '../styles/Typography'
import { ListLayout } from '../styles/LibraryListLayout'

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
        <ViewLayout>
          <Greeting marginLeft="auto" marginRight="auto">
            {t('library.noBooks')}
          </Greeting>
        </ViewLayout>
      </ScreenScrollable>
    )

  return (
    <ScreenScrollable>
      <NavigatinHeader profileBtn />
      <Title textHiglight maxWidth="100%" marginTop="46px">
        {t('library.title')}
      </Title>
      <ViewLayout>
        <ListLayout
          data={books}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <LibraryListItem item={item} />}
        />
      </ViewLayout>
    </ScreenScrollable>
  )
}

export default LibraryScreen
