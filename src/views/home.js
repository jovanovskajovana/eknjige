import React, { useState, useEffect } from 'react'

import firebase from '../api/firebase'
import useLocales from '../hooks/useLocales'
import NavigatinHeader from '../components/NavigationHeader'
import Loader from '../components/Loader'
import Error from '../components/Error'
import ListItem from '../components/ListItem'
import { ScreenScrollable, ViewLayout } from '../styles/ViewLayout'
import { Title, Greeting, ErrorMessage } from '../styles/Typography'
import { ListLayout } from '../styles/ListLayout'

const HomeScreen = () => {
  const { t } = useLocales()
  const [user, setUser] = useState(null)
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const listener = firebase.getCurrentUser((authUser) => {
      setUser(authUser)
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

  if (isLoading) return <Loader />

  if (error) return <Error />

  return (
    <ScreenScrollable>
      <NavigatinHeader profileBtn />
      <ViewLayout>
        <Greeting marginBottom="40px" marginTop="-15px">
          {t('home.welcome')}, {user?.name}!
        </Greeting>
        <Title textHiglight maxWidth="50%">
          {t('home.bestsellers')}
        </Title>
        <ListLayout
          data={books.slice(0, 3)}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <ListItem item={item} />}
        />
        <Title textHiglight marginTop="20px">
          {t('home.favorites')}
        </Title>
        <ListLayout
          data={books.slice(3)}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      </ViewLayout>
    </ScreenScrollable>
  )
}

export default HomeScreen
