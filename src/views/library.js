import React, { useState, useEffect } from 'react'

import firebase from '../api/firebase'
import NavigatinHeader from '../components/NavigationHeader'
import Loader from '../components/Loader'
import Error from '../components/Error'
import LibraryListItem from '../components/LibraryListItem'
import { ScreenScrollable, ViewLayout } from '../styles/ViewLayout'
import { Paragraph } from '../styles/Typography'
import { ListLayout } from '../styles/ListLayout'

const LibraryScreen = () => {
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
      <ViewLayout>
        <Paragraph>No books purchased yet</Paragraph>
      </ViewLayout>
    )

  return (
    <ScreenScrollable>
      <NavigatinHeader profileBtn />
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
