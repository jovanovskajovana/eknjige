import React, { useState, useEffect } from 'react'

import firebase from '../api/firebase'
import NavigatinHeader from '../components/NavigationHeader'
import Loader from '../components/Loader'
import ListItem from '../components/ListItem'
import { ListLayout } from '../styles/ListLayout'
import { ScreenLayout } from '../styles/ViewLayout'

const WishlistScreen = () => {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const listener = firebase.getFavoriteBooks(
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
          renderItem={({ item }) => <ListItem item={item} />}
        />
      )}
    </ScreenLayout>
  )
}

export default WishlistScreen
