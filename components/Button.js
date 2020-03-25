import styled from 'styled-components'

const Btn = styled.button`
  border-radius: 4px;
  padding: 10px 14px;
  font-size: 16px;
  background: ${props => props.theme.btnBg};
  color: ${props => props.theme.btnColor};
  font-family: 'Sans'
`
export default (props) => (
  <Btn onClick={props.onClick}>
    {props.children}
  </Btn>
)
