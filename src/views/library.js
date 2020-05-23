import React, { useState, useEffect } from 'react'

import firebase from '../api/firebase'
import NavigatinHeader from '../components/NavigationHeader'
import Loader from '../components/Loader'
import LibraryListItem from '../components/LibraryListItem'
import { ListLayout } from '../styles/ListLayout'
import { ViewLayout, ScreenLayout, TextLayout } from '../styles/ViewLayout'

const LibraryScreen = () => {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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

  if (isLoading)
    return (
      <ScreenLayout>
        <Loader />
      </ScreenLayout>
    )

  return (
    <ScreenLayout>
      <NavigatinHeader profileBtn />
      {books.length > 0 ? (
        <ListLayout
          data={books}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <LibraryListItem item={item} />}
        />
      ) : (
        <ViewLayout>
          <TextLayout>No books purchased yet</TextLayout>
        </ViewLayout>
      )}
    </ScreenLayout>
  )
}

export default LibraryScreen
