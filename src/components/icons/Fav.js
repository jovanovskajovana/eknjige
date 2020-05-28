import React from 'react'
import { View } from 'react-native'
import Svg, { Path, Rect, Defs } from 'react-native-svg'

const Fav = ({ fill }) => (
  <View>
    <Svg width="35" height="35" viewBox="0 0 35 35" fill="none">
      <Path
        d="M25.6667 1.51511C21.561 1.51511 18.8465 3.75702 17.5 5.24021C16.1535 3.75702 13.439 1.51511 9.33331 1.51511C3.84159 1.51511 0 6.58928 0 12.5605C0 16.9272 2.20192 25.4342 16.9484 33.3462C17.2929 33.5311 17.7073 33.5309 18.0516 33.3462C32.7981 25.4342 35 16.9273 35 12.5605C35 6.7247 31.2689 1.51511 25.6667 1.51511Z"
        fill={fill}
      />
    </Svg>
  </View>
)

export default Fav
