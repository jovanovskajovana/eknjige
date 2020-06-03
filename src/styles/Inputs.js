import styled from 'styled-components/native'

const InputLayout = styled.TextInput`
  font-size: 14px;
  color: ${(props) => props.theme.textPale};
  font-weight: 600;
  border: 1px solid;
  border-color: ${(props) =>
    props.borderFocused ? props.theme.textLight : props.theme.textSecondary};
  border-radius: 4px;
  width: 100%;
  padding: 15px;
  margin: 0 auto 20px;
  max-width: ${(props) => (props.width ? '100%' : '80%')};
`

export default InputLayout
