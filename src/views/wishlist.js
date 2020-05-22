import React, { useState, useEffect } from 'react'

import firebase from '../api/firebase'
import NavigatinHeader from '../components/NavigationHeader'
import ListItem from '../components/ListItem'
import { ListLayout } from '../styles/ListLayout'
import { ViewLayout, ScreenLayout, TextLayout } from '../styles/ViewLayout'

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
          renderItem={({ item }) => <ListItem item={item} />}
        />
      ) : (
        <ViewLayout>
          <TextLayout>No favorite books added</TextLayout>
        </ViewLayout>
      )}
    </ScreenLayout>
  )
}

export default WishlistScreen
