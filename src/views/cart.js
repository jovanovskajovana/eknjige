import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native'

import NavigatinHeader from '../components/NavigationHeader'
import { calcTotalPrice, formatMoney } from '../utils/moneyFormatter'
import CartListItem from '../components/CartListItem'
import { ScreenLayout, ViewLayout, TextLayout } from '../styles/ViewLayout'
import { ListLayout } from '../styles/ListLayout'

const CartScreen = ({ route }) => {
  const navigation = useNavigation()
  const triggerRefresh = route.params?.refresh
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    getCartItems()
  }, [triggerRefresh, cartItems])

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
          </ViewLayout>
          <ViewLayout>
            <Button
              title="Purchase"
              onPress={() =>
                navigation.navigate('Purchase', {
                  total: calcTotalPrice(cartItems),
                  books: cartItems,
                })
              }
            />
          </ViewLayout>
        </>
      ) : (
        <ViewLayout>
          <TextLayout>No books added</TextLayout>
        </ViewLayout>
      )}
    </ScreenLayout>
  )
}

export default CartScreen
