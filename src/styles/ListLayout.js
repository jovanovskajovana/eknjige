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
  background: ${(props) => props.theme.backgroundLight};
  border-radius: 4px;
  width: 100%;
  padding: 20px;
  margin: 10px 0;
`

const DataWrapper = styled.View`
  justify-content: center;
`

const CoverImage = styled.Image`
  width: 80px;
  height: 120px;
`

const DataText = styled(TextLayout)`
  font-size: 14px;
  font-weight: normal;
  color: ${(props) =>
    props.title ? props.theme.textPrimary : props.theme.textSecondary};
  font-weight: ${(props) => (props.title ? 600 : 500)};
`

const Button = styled.Text`
  /* font-size: 14px; */
  font-size: 500;
  margin-bottom: 5px;
`

export { ListLayout, ListItemLayout, DataWrapper, CoverImage, Button, DataText }
