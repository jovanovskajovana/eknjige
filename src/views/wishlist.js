import React, { useState, useEffect } from 'react'

import firebase from '../api/firebase'
import NavigatinHeader from '../components/NavigationHeader'
import { ScreenLayout, TextLayout, ViewLayout } from '../styles/ViewLayout'

const WishlistScreen = () => {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const listener = firebase.getFavoriteBooks()
    console.log(listener)
    // return () => listener()
  })

  return (
    <ScreenLayout>
      <NavigatinHeader profileBtn />
      <ViewLayout>
        <TextLayout>Wishlist</TextLayout>
      </ViewLayout>
    </ScreenLayout>
  )
}

export default WishlistScreen
