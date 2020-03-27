import styled from 'styled-components'

const Btn = styled.button`
  border-radius: ${props => props.radius ? props.radius : '4px'};
  padding: ${props => props.small && '.375rem .75rem' || '10px 14px'};
  font-size: ${props => props.small ? '14px' : '16px'};
  background: ${props => props.bgColor && props.bgColor || props.theme.btnBg};
  color: ${props => props.btnColor && props.btnColor || props.theme.btnColor};
  font-family: 'Sans';
  border: ${props => props.border ? props.border : 'none'};
  font-weight: ${props => props.bold && 'bold' || 'normal'};
  cursor: ${props => props.link ? 'pointer' : 'cursor'};
  line-height: 1.5;
`
export default (props) => (
  <Btn onClick={props.onClick} {...props}>
    {props.children}
  </Btn>
)
