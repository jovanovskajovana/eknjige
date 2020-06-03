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
  font-weight: ${(props) => (props.textBold ? 600 : 500)};
  color: ${(props) =>
    props.textHiglight ? props.theme.textHiglight : props.theme.textLight};
`

const Subtitle = styled(TextLayout)`
  font-size: 16px;
  font-weight: ${(props) => (props.textBold ? 600 : 500)};
  color: ${(props) => (props.textPale ? props.theme.textPale : props.theme.textPrimary)};
`

const Greeting = styled(TextLayout)`
  font-size: 18px;
  font-weight: ${(props) => (props.textBold ? 600 : 500)};
  color: ${(props) =>
    props.textSecondary ? props.theme.textSecondary : props.theme.textPrimary};
`

const InfoText = styled(TextLayout)`
  font-size: 16px;
  font-weight: ${(props) => (props.textBold ? 600 : 500)};
  color: ${(props) => props.theme.textInfo};
`

const Paragraph = styled(TextLayout)`
  font-size: 14px;
  font-weight: normal;
  color: ${(props) =>
    props.textSecondary ? props.theme.textSecondary : props.theme.textPrimary};
`

const ErrorMessage = styled(TextLayout)`
  font-size: 12px;
  font-weight: ${(props) => (props.textBold ? 600 : 500)};
  color: ${(props) => props.theme.textLight};
  margin-top: -10px;
`

export { TextLayout, Title, Subtitle, Greeting, Paragraph, InfoText, ErrorMessage }
