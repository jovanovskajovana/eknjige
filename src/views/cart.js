import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native'

import NavigatinHeader from '../components/NavigationHeader'
import { ScreenLayout, ViewLayout, TextLayout } from '../styles/ViewLayout'

const CartScreen = () => {
  const navigation = useNavigation()

  return (
    <ScreenLayout>
      <NavigatinHeader profileBtn />
      <ViewLayout>
        <TextLayout>Cart</TextLayout>
        <Button title="Go to purchase" onPress={() => navigation.navigate('Purchase')} />
      </ViewLayout>
    </ScreenLayout>
  )
}

export default CartScreen
