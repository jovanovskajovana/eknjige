import React from 'react'

import useLocales from '../hooks/useLocales'
import { ScreenLayout, ViewLayout } from '../styles/ViewLayout'
import { InfoText } from '../styles/Typography'

const Error = () => {
  const { t } = useLocales()
  return (
    <ScreenLayout>
      <ViewLayout>
        <InfoText alignCenter>{t('error')}</InfoText>
      </ViewLayout>
    </ScreenLayout>
  )
}

export default Error
