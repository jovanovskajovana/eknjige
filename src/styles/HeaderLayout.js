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
  flex-direction: row;
  align-items: center;
  margin-right: auto;
`

const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.textHiglight};
  margin-left: 15px;
`

export { HeaderLayout, ProfileButton, BackButton, ButtonText }
