import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'
import stripe from 'tipsi-stripe'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'

import firebase from '../api/firebase'
import useLocales from '../hooks/useLocales'
import NavigatinHeader from '../components/NavigationHeader'
import IconCart from '../components/icons/Cart'
import { calcTotalPrice, formatMoney } from '../utils/moneyFormatter'
import CartListItem from '../components/CartListItem'
import { Button, ButtonConfirm } from '../components/Button'
import {
  ScreenScrollable,
  ViewLayout,
  ViewSolidLayout,
  IconWrapper,
} from '../styles/ViewLayout'
import { InfoText } from '../styles/Typography'
import {
  ListLayout,
  Wrapper,
  PriceWrapper,
  PriceSmall,
  PriceSum,
} from '../styles/CartListLayout'

stripe.setOptions({
  publishableKey: 'pk_test_dFLZyBBlEiU0nQT67AgGac5l00biQmKgzD',
})

const screenHeight = Dimensions.get('window').height

const CartScreen = ({ route }) => {
  const { t } = useLocales()
  const navigation = useNavigation()
  const triggerRefresh = route.params?.refresh
  const [cartItems, setCartItems] = useState([])
  const [token, setToken] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    getCartItems()
  }, [cartItems, triggerRefresh])

  const getCartItems = async () => {
    try {
      const storedDataJSON = await AsyncStorage.getItem('cartItems')
      const storedData = JSON.parse(storedDataJSON)

      if (storedData) {
        setCartItems(storedData)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleCardPayPress = async () => {
    try {
      setIsLoading(true)
      const token = await stripe.paymentRequestWithCardForm()

      setToken(token)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  const handlePayment = async () => {
    setIsLoading(true)

    try {
      await axios({
        method: 'POST',
        url: 'https://us-central1-eknjige-92c0c.cloudfunctions.net/payWithStripe',
        data: {
          amount: calcTotalPrice(cartItems),
          currency: 'EUR',
          token: token.tokenId,
        },
      })

      setIsLoading(false)
      removeCartItems()
      addBookToLibrary()
    } catch (error) {
      console.log(error)
    }
  }

  const removeCartItems = async () => {
    try {
      await AsyncStorage.removeItem('cartItems')

      setToken(null)
      setCartItems([])
    } catch (error) {
      console.log(error)
    }
  }

  const addBookToLibrary = () => {
    cartItems.forEach((item) => {
      firebase.setPurchasedBook(item.key)
    })

    navigation.navigate('Lib')
  }

  if (!(cartItems.length > 0))
    return (
      <ScreenScrollable>
        <NavigatinHeader profileBtn />
        <ViewLayout style={{ minHeight: screenHeight - 220 }}>
          <IconWrapper>
            <IconCart />
          </IconWrapper>
          <InfoText marginLeft="auto" marginRight="auto">
            {t('cart.noBooks')}
          </InfoText>
        </ViewLayout>
      </ScreenScrollable>
    )

  if (error) return <Error />

  return (
    <ScreenScrollable>
      <NavigatinHeader profileBtn />
      <ViewSolidLayout style={{ minHeight: screenHeight }}>
        <Wrapper width="100%">
          <ListLayout
            data={cartItems}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => <CartListItem item={item} />}
          />

          <PriceWrapper alignCenter>
            <PriceSmall marginTop="20px" marginBottom="60px" marginRight="5px">
              {t('cart.total')}:{' '}
            </PriceSmall>
            <PriceSum marginTop="20px" marginBottom="60px">
              {formatMoney(calcTotalPrice(cartItems))}
            </PriceSum>
          </PriceWrapper>

          {token ? (
            <ButtonConfirm
              text={t('cart.pay')}
              loading={isLoading}
              onPress={handlePayment}
            />
          ) : (
            <Button
              text={t('cart.purchase')}
              loading={isLoading}
              onPress={handleCardPayPress}
            />
          )}
        </Wrapper>
      </ViewSolidLayout>
    </ScreenScrollable>
  )
}

export default CartScreen
