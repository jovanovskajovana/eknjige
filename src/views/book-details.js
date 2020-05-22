import React, { useEffect, useState } from 'react'
import { Button } from 'react-native'

import firebase from '../api/firebase'
import NavigatinHeader from '../components/NavigationHeader'
import { ScreenLayout, ViewLayout, TextLayout } from '../styles/ViewLayout'

const BookDetailsScreen = ({ route }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const { book } = route.params

  useEffect(() => {
    const listener = firebase.getFavoriteBooks((querySnapshot) => {
      // const currentItem = querySnapshot.find((document) => {
      //   console.log(document.key)
      //   document.id === book.key
      // })

      querySnapshot.forEach((document) => {
        const isFavoriteDocument = document.id === book.key
        if (isFavoriteDocument) setIsFavorite(isFavoriteDocument)
      })
    })

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
    <ScreenLayout>
      <NavigatinHeader backBtn />
      <ViewLayout>
        {isFavorite ? (
          <Button title="Remove" onPress={() => removeFromWhishlist(book.key)} />
        ) : (
          <Button title="Favorite" onPress={() => addToWhishlist(book.key)} />
        )}
      </ViewLayout>
      <ViewLayout>
        <TextLayout>{book.title}</TextLayout>
        <TextLayout>{book.author}</TextLayout>
        <TextLayout>{book.description}</TextLayout>
      </ViewLayout>
    </ScreenLayout>
  )
}

export default BookDetailsScreen
