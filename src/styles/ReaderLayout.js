import styled from 'styled-components/native'

const ReaderLayout = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background: ${(props) => props.theme.backgroundPrimary};
  width: 100%;
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
`

export { ReaderLayout }
