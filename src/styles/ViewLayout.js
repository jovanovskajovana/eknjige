import styled from 'styled-components/native'

const ViewPositions = styled.View`
  ${(props) => props.marginTop && `margin-top: ${props.marginTop};`}
  ${(props) => props.marginRight && `margin-right: ${props.marginRight};`}
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom};`}
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft};`}
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}
`

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
  flex-grow: 1;
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

const Wrapper = styled(ViewPositions)`
  flex-direction: ${(props) => (props.flexRow ? 'row' : 'column')};
  justify-content: flex-start;
  width: ${(props) => props.width};
`

const Border = styled.View`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.listSeparator};
  margin: 15px 0px;
`

const IconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 100px;
  margin: 0 auto;
`

export {
  ScreenLayout,
  ScreenScrollable,
  ViewLayout,
  ViewSolidLayout,
  Wrapper,
  Border,
  IconWrapper,
}
