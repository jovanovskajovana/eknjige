import React, { useState } from 'react'

import InputLayout from '../styles/Inputs'

const Input = ({ placeholder, value, secureEntry, fullWidth, handleChange }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <InputLayout
      placeholder={placeholder}
      placeholderTextColor="#d6d6d6"
      autoCapitalize="none"
      secureTextEntry={secureEntry}
      value={value}
      width={fullWidth}
      borderFocused={isFocused}
      selectionColor="#fff"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChangeText={(text) => handleChange(text)}
    />
  )
}

export default Input
