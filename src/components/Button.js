import React, { PureComponent } from 'react'
import { View, ActivityIndicator } from 'react-native'

import { ButtonPrimary, ButtonText } from '../styles/Buttons'

const Button = ({ text, disabledText, loading, disabled, onPress }) => {
  const handlePress = (event) => {
    if (loading || disabled) {
      return
    }

    if (onPress) {
      onPress(event)
    }
  }

  return (
    <ButtonPrimary maxWidth="60%" onPress={handlePress}>
      <View>
        {loading && <ActivityIndicator animating size="small" />}
        {!loading && !disabled && <ButtonText>{text}</ButtonText>}
        {!loading && disabled && <ButtonText>{disabledText || text}</ButtonText>}
      </View>
    </ButtonPrimary>
  )
}

export default Button
