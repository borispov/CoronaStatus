import styled, { withTheme } from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.column && 'column' || 'row'};
  justify-content: ${props => props.justify || 'center'};
  margin: ${props => props.margin || '0 2px'};
  align-items: ${props => props.alignItems || ''};
  @media (max-width: 768px) {
    flex-direction: ${props => props.mRow ? 'row' : props.mCol ? 'column' : ''};
  }
`

export const Heading = styled.h1`
  font-size: ${props => props.fontSize || '4.5rem'};
  color: ${props => props.color || props.theme.color};
  font-family: ${props => props.font || 'Montserrat'};
  line-height: 1.5;
`

export const Heading2 = styled.h2`
  font-size: ${props => props.fontSize || '18px'};
  padding: ${props => props.padding || ''};
  color: ${props => props.color || props.theme.color};
  font-family: ${props => props.font || 'Montserrat'};
  background: ${props => props.bg || ''};
  white-space: ${props=> props.nowrap || ''};
  white-space: nowrap;
  overflow: hidden;
  max-width: 450px;
  text-overflow: ${props => props.truncate && 'ellipsis'};
  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 400;
    max-width: 100%;
  }
`

export const Paragraph = styled.p`
  font-size: ${props => props.fontSize || '16px'};
  max-width: ${props => props.mw || '480px'};
  margin: ${props => props.noMargin || '0 auto'};
  line-height: ${props => props.lineHeight || 1.5};
  padding: ${props => props.padding || '2px'};
  color: ${props => props.color || props.theme.color};
  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: 300;
    overflow: hidden;
    max-width: 250px;
    text-overflow: ellipsis;
  }
`

export const simpleWrapper = styled.div`
  background: ${props => props.theme.bgColor};
  color: ${props => props.theme.color};
  direction: ltr;
`

export const Container = styled.div`
  @media (max-width: 576px) {
    max-width: 540px;
  }
  @media (max-width: 768px) {
    max-width: 640px;
  }
  @media (max-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  transition: all .5s cubic-bezier(.55,0,.1,1);
  width: 85%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

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
  margin: ${props => props.margin ? props.margin : ''};
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

export const Button = props => (
  props.langBtn && 
      <LangBtn {...props} >{props.children}</LangBtn>
     || <Btn onClick={props.onClick} {...props}>
      {props.children}
    </Btn>
)
