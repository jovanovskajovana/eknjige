import styled from 'styled-components/native'

const TextLayout = styled.Text`
  ${(props) => props.marginTop && `margin-top: ${props.marginTop};`}
  ${(props) => props.marginRight && `margin-right: ${props.marginRight};`}
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom};`}
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft};`}
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}
  ${(props) =>
    props.alignCenter &&
    `
      text-align: center;
      margin-left: auto;
      margin-right: auto;
  `}
`

const Title = styled(TextLayout)`
  font-size: 30px;
  font-weight: 600;
  color: ${(props) =>
    props.textHiglight ? props.theme.textHiglight : props.theme.textLight};
`

const Subtitle = styled(TextLayout)`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) =>
    props.textSecondary ? props.theme.textSecondary : props.theme.textPrimary};
`

const Paragraph = styled(TextLayout)`
  font-size: 30px;
  font-weight: normal;
  color: ${(props) =>
    props.textSecondary ? props.theme.textSecondary : props.theme.textPrimary};
`

const ErrorMessage = styled(TextLayout)`
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.textLight};
  margin-top: -10px;
`

export { Title, Subtitle, Paragraph, ErrorMessage }
