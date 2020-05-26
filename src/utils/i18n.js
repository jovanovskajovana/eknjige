import i18n from 'i18n-js'

import en from '../locales/en.json'
import sl from '../locales/sl-SI.json'

i18n.fallbacks = true
i18n.translations = { en, sl }

export default i18n
