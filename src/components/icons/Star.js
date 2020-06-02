import React from 'react'
import { View } from 'react-native'
import Svg, { Path, Rect, Defs } from 'react-native-svg'

const Star = ({ fill = '#ffd75b' }) => (
  <View style={{ marginRight: 5 }}>
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M4.645 12.8017L3.58917 19.2742C3.505 19.7883 4.05417 20.1742 4.50834 19.9217L10 16.8867L15.4917 19.9225C15.9417 20.1725 16.4958 19.7942 16.4108 19.275L15.355 12.8025L19.8217 8.22418C20.1758 7.86168 19.9725 7.24668 19.4692 7.17001L13.3208 6.23084L10.565 0.360839C10.3592 -0.0774941 9.64 -0.0774941 9.43417 0.360839L6.67917 6.23001L0.530836 7.16917C0.0258356 7.24668 -0.175831 7.86084 0.178336 8.22334L4.645 12.8017Z"
        fill={fill}
      />
    </Svg>
  </View>
)

export default Star
