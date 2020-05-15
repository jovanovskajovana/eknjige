import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native'

import NavigatinHeader from '../components/NavigationHeader'
import CartListItem from '../components/CartListItem'
import { ScreenLayout, ViewLayout, TextLayout } from '../styles/ViewLayout'
import { ListLayout } from '../styles/ListLayout'

const CartScreen = ({ route }) => {
  const navigation = useNavigation()
  const { book } = route.params
  //take books from local state
  const [books, setBooks] = useState([{ title: 'bla' }])

  useEffect(() => {
    if (book) {
      setBooks([...books, book])
    }
  }, [book])

  return (
    <ScreenLayout>
      <NavigatinHeader profileBtn />
      {books ? (
        <ViewLayout>
          <ListLayout
            data={books}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => <CartListItem item={item} />}
          />
          <Button title="Purchase" onPress={() => navigation.navigate('Purchase')} />
        </ViewLayout>
      ) : (
        <ViewLayout>
          <TextLayout>No books added</TextLayout>
        </ViewLayout>
      )}
    </ScreenLayout>
  )
}

export default CartScreen
