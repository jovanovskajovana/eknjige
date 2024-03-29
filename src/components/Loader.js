import React from 'react'
import { ActivityIndicator } from 'react-native'

import useLocales from '../hooks/useLocales'
import { ScreenLayout, ViewLayout } from '../styles/ViewLayout'
import { InfoText } from '../styles/Typography'

const Loader = () => {
  const { t } = useLocales()
  return (
    <ScreenLayout>
      <ViewLayout>
        <ActivityIndicator size="large" />
        <InfoText alignCenter marginTop="10px">
          {t('loading')}
        </InfoText>
      </ViewLayout>
    </ScreenLayout>
  )
}

export default Loader
