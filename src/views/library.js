import React, { useState, useEffect } from 'react'

import firebase from '../api/firebase'
import NavigatinHeader from '../components/NavigationHeader'
import Loader from '../components/Loader'
import LibraryListItem from '../components/LibraryListItem'
import { ListLayout } from '../styles/ListLayout'
import { ScreenLayout } from '../styles/ViewLayout'

const LibraryScreen = () => {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const listener = firebase.getPurchasedBooks(
      (querySnapshot) => {
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
      },
      (error) => {
        setError(error)
      }
    )
    return () => listener()
  }, [])

  return (
    <ScreenLayout>
      <NavigatinHeader profileBtn />
      {isLoading ? (
        <Loader />
      ) : (
        <ListLayout
          data={books}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <LibraryListItem item={item} />}
        />
      )}
    </ScreenLayout>
  )
}

export default LibraryScreen
