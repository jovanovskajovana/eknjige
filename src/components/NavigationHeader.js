import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSafeArea } from 'react-native-safe-area-context'

import { HeaderLayout, ProfileButton, BackButton } from '../styles/HeaderLayout'

const NavigationHeader = ({ backBtn, profileBtn }) => {
  const navigation = useNavigation()
  const insets = useSafeArea()

  return (
    <HeaderLayout paddingTop={insets.top + 20}>
      {backBtn && (
        <BackButton title="Back" onPress={() => navigation.goBack()}></BackButton>
      )}
      {profileBtn && (
        <ProfileButton onPress={() => navigation.navigate('Profile')}></ProfileButton>
      )}
    </HeaderLayout>
  )
}

export default NavigationHeader
