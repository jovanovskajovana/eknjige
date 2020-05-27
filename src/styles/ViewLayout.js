import styled from 'styled-components/native'

const ScreenLayout = styled.View`
  flex: 1;
  background: ${(props) =>
    props.dark ? props.theme.backgroundDark : props.theme.backgroundPrimary};
  width: 100%;
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
`

const ViewLayout = styled.View`
  width: 100%;
  margin: auto;
`

const TextLayout = styled.Text`
  font-size: 20px;
  font-weight: normal;
  color: ${(props) => props.theme.textPrimary};
`

export { ScreenLayout, ViewLayout, TextLayout }
