import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import { ButtonPrimary, ButtonText, ButtonSuccess } from '../styles/Buttons'

export const Button = ({ text, disabledText, loading, disabled, onPress }) => {
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
        {loading && (
          <ActivityIndicator
            animating
            size="small"
            color="#fff"
            style={{ padding: 15 }}
          />
        )}
        {!loading && !disabled && <ButtonText>{text}</ButtonText>}
        {!loading && disabled && <ButtonText>{disabledText || text}</ButtonText>}
      </View>
    </ButtonPrimary>
  )
}

export const ButtonConfirm = ({ text, disabledText, loading, disabled, onPress }) => {
  const handlePress = (event) => {
    if (loading || disabled) {
      return
    }

    if (onPress) {
      onPress(event)
    }
  }

  return (
    <ButtonSuccess maxWidth="60%" onPress={handlePress}>
      <View>
        {loading && (
          <ActivityIndicator
            animating
            size="small"
            color="#fff"
            style={{ padding: 15 }}
          />
        )}
        {!loading && !disabled && <ButtonText>{text}</ButtonText>}
        {!loading && disabled && <ButtonText>{disabledText || text}</ButtonText>}
      </View>
    </ButtonSuccess>
  )
}
