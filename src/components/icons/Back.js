import React from 'react'
import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

const Back = ({ fill = '#837bee' }) => (
  <Svg
    width="12"
    height="20"
    viewBox="0 0 12 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M10 2L2.70926 9.24672C2.31755 9.63606 2.31564 10.2692 2.70499 10.6609L10 18"
      stroke={fill}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Back
