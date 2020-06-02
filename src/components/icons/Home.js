import React from 'react'
import { View } from 'react-native'
import Svg, { Path, Rect, Defs } from 'react-native-svg'

const Home = ({ fill }) => (
  <View>
    <Svg width="30" height="29" viewBox="0 0 30 29" fill="none">
      <Path
        d="M29.1906 12.6136C29.19 12.6129 29.1893 12.6123 29.1886 12.6116L16.951 0.782349C16.4293 0.277893 15.7358 0 14.9981 0C14.2605 0 13.5669 0.277672 13.0451 0.782127L0.813874 12.6054C0.809754 12.6094 0.805634 12.6136 0.801514 12.6176C-0.269653 13.659 -0.267822 15.3487 0.806778 16.3875C1.29773 16.8623 1.94615 17.1373 2.63943 17.1661C2.66759 17.1687 2.69597 17.1701 2.72458 17.1701H3.21233V25.8757C3.21233 27.5984 4.66229 29 6.44482 29H11.2326C11.7178 29 12.1115 28.6197 12.1115 28.1504V21.3252C12.1115 20.5391 12.7729 19.8997 13.5862 19.8997H16.4101C17.2233 19.8997 17.8848 20.5391 17.8848 21.3252V28.1504C17.8848 28.6197 18.2782 29 18.7637 29H23.5514C25.334 29 26.7839 27.5984 26.7839 25.8757V17.1701H27.2362C27.9737 17.1701 28.6672 16.8924 29.1893 16.3879C30.265 15.3474 30.2655 13.6548 29.1906 12.6136V12.6136Z"
        fill={fill}
      />
      <Defs>
        <Rect width="30" height="30" />
      </Defs>
    </Svg>
  </View>
)

export default Home
