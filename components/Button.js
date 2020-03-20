import styled from 'styled-components'

const Btn = styled.button`
  border-radius: 4px;
  padding: 8px 14px;
  font-size: 16px;
  background: lightblue;
  color: ${props => props.theme.color};
  font-family: 'Sans'
  :hover & {
    background: ${props => props.theme.color};
    color: ${props => props.theme.bgColor};
  }
`
export default (props) => (
  <Btn onClick={props.onClick}>
    {props.children}
  </Btn>
)
