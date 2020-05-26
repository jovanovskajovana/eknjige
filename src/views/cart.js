import React, { useState, useEffect } from 'react'
import stripe from 'tipsi-stripe'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'

import firebase from '../api/firebase'
import NavigatinHeader from '../components/NavigationHeader'
import { calcTotalPrice, formatMoney } from '../utils/moneyFormatter'
import CartListItem from '../components/CartListItem'
import { ScreenLayout, ViewLayout, TextLayout } from '../styles/ViewLayout'
import { ListLayout } from '../styles/ListLayout'
import Button from '../components/Button'

stripe.setOptions({
  publishableKey: 'pk_test_dFLZyBBlEiU0nQT67AgGac5l00biQmKgzD',
})

const CartScreen = ({ route }) => {
  const navigation = useNavigation()
  const triggerRefresh = route.params?.refresh
  const [cartItems, setCartItems] = useState([])
  const [clearCart, setClearCart] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [token, setToken] = useState(null)

  useEffect(() => {
    getCartItems()
  }, [triggerRefresh, cartItems, clearCart])

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
      axios({
        method: 'POST',
        url: 'https://us-central1-eknjige-92c0c.cloudfunctions.net/payWithStripe',
        data: {
          amount: calcTotalPrice(cartItems),
          currency: 'EUR',
          token: token.tokenId,
        },
      }).then(() => {
        setIsLoading(false)
        removeCartItems()
        addBookToLibrary()
      })
    } catch (error) {
      console.log(error)
    }
  }

  removeCartItems = async () => {
    try {
      await AsyncStorage.removeItem('cartItems')

      setToken(null)
      setClearCart(true)
    } catch (error) {
      console.log(error)
    }
  }

  addBookToLibrary = () => {
    cartItems.forEach((item) => {
      firebase.setPurchasedBook(item.key)
    })

    // navigation.navigate('Lib')424
  }

  return (
    <ScreenLayout>
      <NavigatinHeader profileBtn />
      {cartItems.length > 0 ? (
        <>
          <ListLayout
            data={cartItems}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => <CartListItem item={item} />}
          />
          <ViewLayout>
            <TextLayout>Total: {formatMoney(calcTotalPrice(cartItems))}</TextLayout>
            {token ? (
              <Button text="Make Payment" loading={isLoading} onPress={handlePayment} />
            ) : (
              <Button
                text="Enter you card and pay"
                loading={isLoading}
                onPress={handleCardPayPress}
              />
            )}
          </ViewLayout>
        </>
      ) : (
        <ViewLayout>
          <TextLayout>No books added to cart</TextLayout>
        </ViewLayout>
      )}
    </ScreenLayout>
  )
}

export default CartScreen
