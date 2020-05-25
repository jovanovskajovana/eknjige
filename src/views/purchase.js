import React, { useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'
import stripe from 'tipsi-stripe'
import axios from 'axios'
import { View, Text, StyleSheet } from 'react-native'

import firebase from '../api/firebase'
import NavigatinHeader from '../components/NavigationHeader'
import { ScreenLayout, ViewLayout, TextLayout } from '../styles/ViewLayout'
import Button from '../components/Button'

stripe.setOptions({
  publishableKey: 'pk_test_dFLZyBBlEiU0nQT67AgGac5l00biQmKgzD',
})

const PurchaseScreen = ({ route }) => {
  const navigation = useNavigation()
  const { books, total } = route.params
  const [isLoading, setIsLoading] = useState(false)
  const [token, setToken] = useState(null)

  const handleCardPayPress = async () => {
    try {
      setIsLoading(true)
      const token = await stripe.paymentRequestWithCardForm({
        // Only iOS support this options
        smsAutofillDisabled: true,
        requiredBillingAddressFields: 'full',
        prefilledInformation: {
          billingAddress: {
            name: 'Gunilla Haugeh',
            line1: 'Canary Place',
            line2: '3',
            city: 'Macon',
            state: 'Georgia',
            country: 'US',
            postalCode: '31217',
            email: 'ghaugeh0@printfriendly.com',
          },
        },
      })

      setIsLoading(false)
      setToken(token)
    } catch (error) {
      setIsLoading(false)
    }
  }

  const handlePayment = async () => {
    setIsLoading(true)

    try {
      axios({
        method: 'POST',
        url: 'https://us-central1-eknjige-92c0c.cloudfunctions.net/payWithStripe',
        data: {
          amount: total,
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
    } catch (error) {
      console.log(error)
    }
  }

  addBookToLibrary = () => {
    books.forEach((book) => {
      firebase.setPurchasedBook(book.key)
    })

    navigation.navigate('Lib')
  }

  return (
    <ScreenLayout>
      <NavigatinHeader backBtn />
      <Text style={styles.header}>Card Form Example</Text>
      <Text style={styles.instruction}>{total}</Text>
      <Button
        text="Enter you card and pay"
        loading={isLoading}
        onPress={handleCardPayPress}
      />
      <View style={styles.token}>
        {token && (
          <>
            <Text style={styles.instruction}>Token: {token.tokenId}</Text>
            <Button text="Make Payment" loading={isLoading} onPress={handlePayment} />
          </>
        )}
      </View>
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instruction: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  token: {
    height: 20,
  },
})

export default PurchaseScreen
