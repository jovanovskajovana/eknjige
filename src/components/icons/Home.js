import React from 'react'
import { View } from 'react-native'
import Svg, { Path, Rect, Defs } from 'react-native-svg'

const Home = ({ fill }) => (
  <View>
    <Svg width="35" height="35" viewBox="0 0 35 35" fill="none">
      <Path
        d="M34.0559 15.2233C34.0551 15.2225 34.0543 15.2217 34.0535 15.2209L19.7762 0.944214C19.1677 0.335388 18.3586 0 17.4979 0C16.6373 0 15.8282 0.335121 15.2194 0.943947L0.949636 15.2134C0.94483 15.2182 0.940023 15.2233 0.935216 15.2281C-0.314478 16.485 -0.312342 18.5243 0.941358 19.778C1.51413 20.3511 2.27063 20.683 3.07946 20.7177C3.1123 20.7209 3.14541 20.7225 3.17879 20.7225H3.74783V31.2293C3.74783 33.3084 5.43946 35 7.51908 35H13.1048C13.6709 35 14.1302 34.541 14.1302 33.9746V25.7373C14.1302 24.7886 14.9019 24.0168 15.8506 24.0168H19.1452C20.094 24.0168 20.8657 24.7886 20.8657 25.7373V33.9746C20.8657 34.541 21.3247 35 21.8911 35H27.4768C29.5564 35 31.2481 33.3084 31.2481 31.2293V20.7225H31.7757C32.6361 20.7225 33.4452 20.3874 34.0543 19.7786C35.3093 18.5227 35.3098 16.4799 34.0559 15.2233Z"
        fill={fill}
      />
      <Defs>
        <Rect width="35" height="35" fill="white" />
      </Defs>
    </Svg>
  </View>
)

export default Home
