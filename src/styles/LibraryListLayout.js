import styled from 'styled-components/native'

import { TextLayout } from './Typography'

const ListLayout = styled.FlatList`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  background: ${(props) => props.theme.backgroundPrimary};
  width: 100%;
  height: 100%;
  margin: 20px 0;
`

const ListItemLayout = styled.TouchableOpacity`
  background: ${(props) => props.theme.backgroundLight};
  border-radius: 4px;
  width: 40%;
  padding: 20px;
  margin: 10px 0;
`

const Wrapper = styled.View`
  justify-content: flex-start;
  width: ${(props) => props.width};
`

const CoverImage = styled.Image`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
`

const DataText = styled(TextLayout)`
  font-size: 14px;
  font-weight: ${(props) => (props.title ? 600 : 500)};
  line-height: 18px;
  color: ${(props) =>
    props.title ? props.theme.textPrimary : props.theme.textSecondary};
`

export { ListLayout, ListItemLayout, Wrapper, CoverImage, DataText }
