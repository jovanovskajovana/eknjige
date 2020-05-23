import React, { useState, useEffect } from 'react'

import firebase from '../api/firebase'
import NavigatinHeader from '../components/NavigationHeader'
import Loader from '../components/Loader'
import ListItem from '../components/ListItem'
import { ScreenLayout, ViewLayout, TextLayout } from '../styles/ViewLayout'
import { ListLayout } from '../styles/ListLayout'

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
    const listener = firebase.getBooks().onSnapshot((querySnapshot) => {
      const books = []

      querySnapshot.forEach((documentSnapshot) => {
        books.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        })

        setBooks(books)
        setIsLoading(false)
      })
    })
    return () => listener()
  }, [])

  // Handle states example
  // let listToDisplay
  // if (books === null) {
  //   listToDisplay = <li>Loading shirts...</li>
  // } else if (books.length === 0) {
  //   listToDisplay = <li>No shirts found</li>
  // } else {
  //   listToDisplay = books.map((shirt) => {
  //     return <li key={shirt.key}>{shirt.name}</li>
  //   })
  // }
  // return <ol>{listToDisplay}</ol>

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
          <ListLayout
            data={books}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => <ListItem item={item} />}
          />
        </>
      )}
    </ScreenLayout>
  )
}

export default HomeScreen
