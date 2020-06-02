import styled from 'styled-components/native'

import { TextLayout } from './Typography'

const ListLayout = styled.FlatList`
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 20px 0px;
`

const ListItemLayout = styled.TouchableOpacity`
  flex-direction: row;
  background: ${(props) => props.theme.backgroundLight};
  width: 100%;
  margin: 10px 0px;
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

const Border = styled.View`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.listSeparator};
  margin: 15px 0px;
`

const CoverImage = styled.Image`
  width: 70px;
  height: 100px;
`

const DataText = styled(TextLayout)`
  font-size: 14px;
  font-weight: normal;
  color: ${(props) => (props.title ? props.theme.textPrimary : props.theme.textInfo)};
  font-weight: ${(props) => (props.title ? 600 : 500)};
`

const PriceBig = styled(TextLayout)`
  font-size: 20px;
  font-weight: normal;
  color: ${(props) => (props.title ? props.theme.textPrimary : props.theme.textInfo)};
  font-weight: 500;
`

const PriceSmall = styled(TextLayout)`
  font-size: 16px;
  font-weight: normal;
  color: ${(props) => (props.title ? props.theme.textPrimary : props.theme.textInfo)};
  font-weight: 500;
`

const PriceSum = styled(TextLayout)`
  font-size: 24px;
  font-weight: normal;
  color: ${(props) => (props.title ? props.theme.textPrimary : props.theme.textInfo)};
  font-weight: 500;
`

export {
  ListLayout,
  ListItemLayout,
  Wrapper,
  PriceWrapper,
  Border,
  CoverImage,
  DataText,
  PriceBig,
  PriceSmall,
  PriceSum,
}
