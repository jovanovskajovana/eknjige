import React, { useEffect, useState } from 'react'
import { Button } from 'react-native'

import firebase from '../api/firebase'
import NavigatinHeader from '../components/NavigationHeader'
import { ScreenScrollable, ViewLayout } from '../styles/ViewLayout'
import { Subtitle, Paragraph } from '../styles/Typography'

const BookDetailsScreen = ({ route }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const { book } = route.params

  useEffect(() => {
    let listener

    firebase.getFavoriteBooks(
      (querySnapshot) => {
        const favoriteDocument = querySnapshot.docs.find((document) => {
          return document.id === book.key
        })

        if (favoriteDocument) {
          setIsFavorite(true)
        }
      },
      (unsubcribe) => (listener = unsubcribe)
    )
    return () => listener()
  }, [isFavorite])

  const addToWhishlist = (itemKey) => {
    firebase.setFavoriteBook(itemKey)
    setIsFavorite(true)
  }

  const removeFromWhishlist = (itemKey) => {
    firebase.removeFavoriteBook(itemKey)
    setIsFavorite(false)
  }

  return (
    <ScreenScrollable>
      <NavigatinHeader backBtn />
      <ViewLayout>
        {isFavorite ? (
          <Button title="Remove" onPress={() => removeFromWhishlist(book.key)} />
        ) : (
          <Button title="Add" onPress={() => addToWhishlist(book.key)} />
        )}
        <Subtitle>{book.title}</Subtitle>
        <Paragraph>{book.author}</Paragraph>
        <Paragraph>{book.description}</Paragraph>
      </ViewLayout>
    </ScreenScrollable>
  )
}

export default BookDetailsScreen
