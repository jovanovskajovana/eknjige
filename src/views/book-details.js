import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import useLocales from '../hooks/useLocales'
import firebase from '../api/firebase'
import IconFav from '../components/icons/Fav'
import NavigatinHeader from '../components/NavigationHeader'
import { ScreenScrollable, ViewSolidLayout } from '../styles/ViewLayout'
import { ButtonLink, ButtonText } from '../styles/Buttons'
import { Wrapper, CoverImage, DataText } from '../styles/ListLayout'

const BookDetailsScreen = ({ route }) => {
  const { t } = useLocales()
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
      <ViewSolidLayout>
        <Wrapper width="100%">
          <View>
            <CoverImage
              source={{
                uri: `${book.cover_img_url}`,
              }}
            />
            <View style={{ marginLeft: 'auto' }}>
              {isFavorite ? (
                <ButtonLink onPress={() => removeFromWhishlist(book.key)}>
                  <IconFav fill="#A19BF8" />
                </ButtonLink>
              ) : (
                <ButtonLink onPress={() => addToWhishlist(book.key)}>
                  <IconFav fill="#cacaca" />
                </ButtonLink>
              )}
            </View>
          </View>
        </Wrapper>
        <Wrapper width="100%">
          <View>
            <DataText title marginBottom="5px">
              {book.title}
            </DataText>
            <DataText>{book.author}</DataText>
            <DataText>{book.description}</DataText>
          </View>
        </Wrapper>
      </ViewSolidLayout>
    </ScreenScrollable>
  )
}

export default BookDetailsScreen
