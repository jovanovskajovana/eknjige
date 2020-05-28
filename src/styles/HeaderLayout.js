import styled from 'styled-components/native'

const HeaderLayout = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`

const ProfileButton = styled.TouchableOpacity`
  background: ${(props) => props.theme.profilePlaceholder};
  width: 54px;
  height: 54px;
  border-radius: 100px;
  margin-left: auto;
`

const BackButton = styled.TouchableOpacity`
  margin-right: auto;
`

export { HeaderLayout, ProfileButton, BackButton }
