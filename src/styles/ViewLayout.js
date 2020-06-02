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

const ScreenScrollable = styled.ScrollView`
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

const ViewSolidLayout = styled.View`
  width: 100%;
  background-color: ${(props) => props.theme.backgroundLight};
  margin-top: 40px;
  padding: 30px 20px;
`

const TextLayout = styled.Text`
  font-size: 20px;
  font-weight: normal;
  color: ${(props) => props.theme.textPrimary};
`

export { ScreenLayout, ScreenScrollable, ViewLayout, ViewSolidLayout, TextLayout }
