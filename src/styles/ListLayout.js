import styled from 'styled-components/native'

const ListLayout = styled.FlatList`
  flex: 1;
  /* align-items: center; */
  /* justify-content: center; */
  background: ${(props) => props.theme.backgroundPrimary};
  width: 100%;
  height: 100%;
  margin: 40px 0;
`

const ListItemLayout = styled.TouchableOpacity`
  background: ${(props) => props.theme.backgroundLight};
  width: 100%;
  margin: 10px 0;
`

export { ListLayout, ListItemLayout }
