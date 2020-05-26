import React, { useState } from 'react'
import * as Localization from 'expo-localization'

import i18n from '../utils/i18n'

const useLocales = () => {
  const [locale, setLocale] = useState(Localization.locale)
  const localizationContext = React.useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale]
  )

  return localizationContext
}

export default useLocales
