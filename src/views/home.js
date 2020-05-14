import React, { useState, useEffect } from 'react'
import { ActivityIndicator, FlatList, View, Text } from 'react-native'

import firebase from '../api/firebase'
import NavigatinHeader from '../components/NavigationHeader'
import Loader from '../components/Loader'
import { ScreenLayout, ViewLayout, TextLayout, Link } from '../styles/ViewLayout'

const HomeScreen = () => {
  const [user, setUser] = useState(null)
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(true)

  useEffect(() => {
    const listener = firebase.getCurrentUser((authUser) => {
      setUser(authUser)
      setIsLoading(false)
    })
    return () => listener()
  }, [])

  useEffect(() => {
    const listener = firebase.getBooks().onSnapshot(
      (querySnapshot) => {
        const books = []

        querySnapshot.forEach((documentSnapshot) => {
          books.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          })

          setBooks(books)
          setIsLoading(false)
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
        <>
          <ViewLayout>
            <TextLayout>Hi, {user?.name}!</TextLayout>
          </ViewLayout>
          <FlatList
            data={books}
            renderItem={({ item }) => (
              <ViewLayout>
                <TextLayout>{item.title}</TextLayout>
                <TextLayout>{item.author}</TextLayout>
              </ViewLayout>
            )}
          />
        </>
      )}
    </ScreenLayout>
  )
}

export default HomeScreen
