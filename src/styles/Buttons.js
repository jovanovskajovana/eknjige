import styled from 'styled-components/native'

const ButtonPrimary = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.disabled ? props.theme.buttonDisabled : props.theme.buttonPrimary};
  border-radius: 100px;
  margin: 10px auto;
  width: 100%;
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}
`

const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.textLight};
  padding: 15px;
  text-align: center;
`

const ButtonLink = styled.TouchableOpacity`
  font-size: 14px;
  font-weight: 600;
`

const LinkText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) =>
    props.textHiglight ? props.theme.textHiglight : props.theme.textPale};
  padding: 15px;
  text-align: center;
`

const ButtonRemove = styled.TouchableOpacity`
  margin-left: auto;
  padding-top: 5px;
`

const RemoveText = styled.Text`
  padding: 0;
`

export { ButtonPrimary, ButtonText, ButtonLink, LinkText, ButtonRemove, RemoveText }
