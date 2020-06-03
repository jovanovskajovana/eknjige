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
  flex: 1;
  width: 100%;
  margin: auto;
  justify-content: center;
`

const ViewSolidLayout = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${(props) => props.theme.backgroundLight};
  border-radius: 4px;
  margin-top: 30px;
  padding: 35px 25px;
`

const Border = styled.View`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.listSeparator};
  margin: 15px 0px;
`

export { ScreenLayout, ScreenScrollable, ViewLayout, ViewSolidLayout, Border }
