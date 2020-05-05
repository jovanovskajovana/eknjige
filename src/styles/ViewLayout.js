import styled from 'styled-components/native'

const ViewLayout = styled.View`
  /* flex: 1; */
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.backgroundPrimary};
  width: 200px;
  height: 200px;
  margin: auto;
`

const TextLayout = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.textPrimary};
`

export { ViewLayout, TextLayout }
