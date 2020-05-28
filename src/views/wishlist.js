import React, { useState, useEffect } from 'react'

import firebase from '../api/firebase'
import NavigatinHeader from '../components/NavigationHeader'
import ListItem from '../components/ListItem'
import { ScreenScrollable, ViewLayout } from '../styles/ViewLayout'
import { ListLayout } from '../styles/ListLayout'
import { Greeting } from '../styles/Typography'

const WishlistScreen = () => {
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
      <ViewLayout>
        <Greeting marginLeft="auto" marginRight="auto">
          No favorite books added
        </Greeting>
      </ViewLayout>
    )

  return (
    <ScreenScrollable>
      <NavigatinHeader profileBtn />
      <ListLayout
        data={books}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </ScreenScrollable>
  )
}

export default WishlistScreen
