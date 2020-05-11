import styled from 'styled-components/native'

const HeaderLayout = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`

const ProfileButton = styled.TouchableOpacity`
  align-self: flex-end;
  background: purple;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  margin-left: auto;
`

const BackButton = styled.Button`
  margin-right: auto;
`

export { HeaderLayout, ProfileButton, BackButton }
