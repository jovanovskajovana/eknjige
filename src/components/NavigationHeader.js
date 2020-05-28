import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSafeArea } from 'react-native-safe-area-context'

import useLocales from '../hooks/useLocales'
import IconBack from './icons/Back'
import { HeaderLayout, ProfileButton, BackButton } from '../styles/HeaderLayout'
import { LinkText } from '../styles/Buttons'

const NavigationHeader = ({ backBtn, profileBtn }) => {
  const { t } = useLocales()
  const navigation = useNavigation()
  const insets = useSafeArea()

  return (
    <HeaderLayout paddingTop={insets.top + 20}>
      {backBtn && (
        <BackButton onPress={() => navigation.goBack()}>
          <IconBack />
          <LinkText textHiglight>{t('back')}</LinkText>
        </BackButton>
      )}
      {profileBtn && (
        <ProfileButton onPress={() => navigation.navigate('Profile')}></ProfileButton>
      )}
    </HeaderLayout>
  )
}

export default NavigationHeader
