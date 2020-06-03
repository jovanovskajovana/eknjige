import styled from 'styled-components/native'

const ButtonPrimary = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.disabled ? props.theme.buttonDisabled : props.theme.buttonPrimary};
  border-radius: 100px;
  width: 100%;
  margin: 10px auto;
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}
`

const ButtonSuccess = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.buttonSuccess};
  border-radius: 100px;
  width: 100%;
  min-height: 40px;
  margin: 10px auto;
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

export {
  ButtonPrimary,
  ButtonSuccess,
  ButtonText,
  ButtonLink,
  LinkText,
  ButtonRemove,
  RemoveText,
}
