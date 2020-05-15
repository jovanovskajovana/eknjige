import styled from 'styled-components/native'

const ScreenLayout = styled.View`
  flex: 1;
  /* align-items: center; */
  /* justify-content: center; */
  background: ${(props) => props.theme.backgroundPrimary};
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
  font-weight: 500;
  color: ${(props) => props.theme.textPrimary};
`

const Link = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: blue;
`

export { ScreenLayout, ViewLayout, TextLayout, Link }
