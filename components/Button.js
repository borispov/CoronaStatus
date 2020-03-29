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

const LangBtn = styled.button`
  position: relative;
  background: ${props => props.theme.bgColor};
  color: ${props => props.theme.color};
  font-size: 14px;
  font-weight: 600;
  font-family: 'Sans';
  padding: 8px 10px;
  width: 100%;
  outline: none;
  text-align: center;
  border: none;
  border-radius: 6px;
  margin: 0 6px;
  margin-left: 16px;
  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: 400;
    padding: 4px 6px;
  }
`


export default (props) => (
  props.langBtn && 
      <LangBtn {...props} >{props.children}</LangBtn>
     || <Btn onClick={props.onClick} {...props}>
      {props.children}
    </Btn>

  )
