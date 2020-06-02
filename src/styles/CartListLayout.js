import styled from 'styled-components/native'

import { TextLayout } from './Typography'

const ListLayout = styled.FlatList`
  flex: 1;
  background: ${(props) => props.theme.backgroundPrimary};
  width: 100%;
  height: 100%;
  margin: 20px 0;
`

const ListItemLayout = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 4px;
  width: 100%;
  margin: 10px 0;
`

const Wrapper = styled.View`
  justify-content: flex-start;
  width: ${(props) => props.width};
`

const CoverImage = styled.Image`
  width: 70px;
  height: 100px;
`

const DataText = styled(TextLayout)`
  font-size: 14px;
  font-weight: normal;
  line-height: 18px;
  color: ${(props) => (props.title ? props.theme.textPrimary : props.theme.textInfo)};
  font-weight: ${(props) => (props.title ? 600 : 500)};
`

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.buttonPrimary};
  border-radius: 100px;
  width: 80%;
  height: 30px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
`

const ButtonText = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.textLight};
`

export { ListLayout, ListItemLayout, Wrapper, CoverImage, Button, ButtonText, DataText }
