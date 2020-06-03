import styled from 'styled-components/native'

import { TextLayout } from './Typography'

const CoverWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 60px;
`

const SectionWrapper = styled.View`
  flex-direction: column;
  margin-bottom: 60px;
`

const Wrapper = styled.View`
  justify-content: flex-start;
  width: ${(props) => props.width};
  flex-direction: ${(props) => (props.flexRow ? 'row' : 'column')};
`

const CoverImage = styled.Image`
  width: 85%;
  height: 160px;
`

const DataText = styled(TextLayout)`
  font-size: 14px;
  font-weight: ${(props) => (props.title ? 600 : 500)};
  line-height: 18px;
  color: ${(props) =>
    props.title ? props.theme.textPrimary : props.theme.textSecondary};
`

const DataTitle = styled(TextLayout)`
  font-size: 16px;
  font-weight: ${(props) => (props.title ? 600 : 500)};
  line-height: 18px;
  color: ${(props) =>
    props.title ? props.theme.textPrimary : props.theme.textSecondary};
`

const Raiting = styled(TextLayout)`
  font-size: 26px;
  font-weight: 600;
  color: ${(props) => props.theme.textPrimary};
`

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.buttonPrimary};
  border-radius: 100px;
  width: 60%;
  height: 30px;
  margin-top: auto;
  margin-bottom: 20px;
`

const ButtonText = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.textLight};
`

export {
  CoverWrapper,
  SectionWrapper,
  Wrapper,
  CoverImage,
  DataTitle,
  DataText,
  Raiting,
  Button,
  ButtonText,
}
