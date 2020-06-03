import styled from 'styled-components/native'

import { TextLayout } from './Typography'

const ListLayout = styled.FlatList`
  flex: 1;
  flex-direction: row;
  background: ${(props) => props.theme.backgroundPrimary};
  width: 100%;
  height: 100%;
  margin: 20px -20px;
`

const ListItemLayout = styled.TouchableOpacity`
  background: ${(props) => props.theme.backgroundLight};
  border-radius: 4px;
  padding: 20px;
  margin: 10px 20px;
`

const Wrapper = styled.View`
  justify-content: flex-start;
  width: ${(props) => props.width};
`

const CoverImage = styled.Image`
  width: 100%;
  height: 140px;
  margin-bottom: 10px;
`

const DataText = styled(TextLayout)`
  font-size: 14px;
  font-weight: ${(props) => (props.title ? 600 : 500)};
  line-height: 16px;
  color: ${(props) =>
    props.title ? props.theme.textPrimary : props.theme.textSecondary};
`

export { ListLayout, ListItemLayout, Wrapper, CoverImage, DataText }
