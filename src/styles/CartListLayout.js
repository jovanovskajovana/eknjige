import styled from 'styled-components/native'

import { TextLayout } from './Typography'

const ListLayout = styled.FlatList`
  flex: 1;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`

const ListItemLayout = styled.TouchableOpacity`
  flex-direction: row;
  background: ${(props) => props.theme.backgroundLight};
  width: 100%;
`

const Wrapper = styled.View`
  justify-content: flex-start;
  width: ${(props) => props.width};
  flex-direction: ${(props) => (props.flexRow ? 'row' : 'column')};
`

const PriceWrapper = styled.View`
  margin-top: auto;
  margin-left: auto;
  flex-direction: row;
  align-items: ${(props) => (props.alignCenter ? 'center' : 'flex-end')};
`

const CoverImage = styled.Image`
  width: 70px;
  height: 100px;
`

const DataText = styled(TextLayout)`
  font-size: 14px;
  font-weight: ${(props) => (props.title ? 600 : 500)};
  color: ${(props) =>
    props.title ? props.theme.textPrimary : props.theme.textSecondary};
`

const PriceBig = styled(TextLayout)`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) =>
    props.title ? props.theme.textPrimary : props.theme.textSecondary};
`

const PriceSmall = styled(TextLayout)`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: ${(props) =>
    props.title ? props.theme.textPrimary : props.theme.textSecondary};
`

const PriceSum = styled(TextLayout)`
  font-size: 26px;
  font-weight: 600;
  color: ${(props) =>
    props.title ? props.theme.textPrimary : props.theme.textSecondary};
`

export {
  ListLayout,
  ListItemLayout,
  Wrapper,
  PriceWrapper,
  CoverImage,
  DataText,
  PriceBig,
  PriceSmall,
  PriceSum,
}
