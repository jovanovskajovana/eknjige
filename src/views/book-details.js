import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'

import useLocales from '../hooks/useLocales'
import firebase from '../api/firebase'
import IconFav from '../components/icons/Fav'
import IconStar from '../components/icons/Star'
import NavigatinHeader from '../components/NavigationHeader'
import { ScreenScrollable, ViewSolidLayout, Border } from '../styles/ViewLayout'
import { ButtonLink } from '../styles/Buttons'
import {
  CoverWrapper,
  SectionWrapper,
  Wrapper,
  CoverImage,
  DataTitle,
  DataText,
  Raiting,
  Button,
  ButtonText,
} from '../styles/DetailsLayout'

const BookDetailsScreen = ({ route }) => {
  const { t } = useLocales()
  const navigation = useNavigation()
  const [isFavorite, setIsFavorite] = useState(false)
  const [refresh, setRefresh] = useState(false)
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

  const addToCart = async (item) => {
    let cartItems = []
    try {
      const storedDataJSON = await AsyncStorage.getItem('cartItems')
      const storedData = JSON.parse(storedDataJSON)

      if (storedData) {
        const currentItem = storedData.find((storageItem) => storageItem.key === item.key)

        if (currentItem) {
          cartItems = storedData.map((storageItem) => {
            if (storageItem.key === currentItem.key) {
              storageItem.quantity += 1
            }
            return storageItem
          })
        } else {
          cartItems = [...storedData, { ...item, quantity: 1 }]
        }

        await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems))
      } else {
        cartItems.push({
          ...item,
          quantity: 1,
        })

        await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems))
      }

      setRefresh(!refresh)
      navigation.navigate('Cart', { refresh })
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <ScreenScrollable>
      <NavigatinHeader backBtn />
      <ViewSolidLayout>
        <CoverWrapper>
          <Wrapper width="40%">
            <CoverImage
              source={{
                uri: `${book.cover_img_url}`,
              }}
            />
          </Wrapper>
          <Wrapper width="60%" flexRow>
            <Wrapper width="80%">
              <DataText title marginTop="25px" marginBottom="5px">
                {book.title}
              </DataText>
              <DataText>{book.author}</DataText>
              <Button onPress={() => addToCart(book)}>
                <ButtonText>{t('buy')}</ButtonText>
              </Button>
            </Wrapper>
            <Wrapper width="20%">
              {isFavorite ? (
                <ButtonLink onPress={() => removeFromWhishlist(book.key)}>
                  <IconFav fill="#A19BF8" />
                </ButtonLink>
              ) : (
                <ButtonLink onPress={() => addToWhishlist(book.key)}>
                  <IconFav fill="#cacaca" />
                </ButtonLink>
              )}
            </Wrapper>
          </Wrapper>
        </CoverWrapper>

        <SectionWrapper>
          <DataTitle title marginBottom="10px">
            {t('bookDetails.description')}
          </DataTitle>
          <DataText>{book.description}</DataText>
        </SectionWrapper>

        <SectionWrapper>
          <DataTitle title marginBottom="10px">
            {t('bookDetails.raiting')}
          </DataTitle>
          <Wrapper width="100%" flexRow>
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
          </Wrapper>
          <Raiting title marginTop="5px">
            4.5
          </Raiting>
        </SectionWrapper>

        <SectionWrapper>
          <DataTitle title marginBottom="10px">
            {t('bookDetails.comments')}
          </DataTitle>
          <Border />
          <DataText>{t('bookDetails.noComments')}</DataText>
        </SectionWrapper>
      </ViewSolidLayout>
    </ScreenScrollable>
  )
}

export default BookDetailsScreen
