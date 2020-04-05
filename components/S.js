import styled, { withTheme, keyframes } from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.column && 'column' || 'row'};
  justify-content: ${props => props.justify || 'center'};
  margin: ${props => props.margin || '0 2px'};
  color: ${props => props.color || ''};
  align-items: ${props => props.alignItems || ''};
  flex: ${props => props.flex};
  background: ${props => props.bgColor === 'inverse' ? props.theme.color : props.bGcolor === 'bg' ? props.theme.bgColor : ''};
  padding: ${props => props.padding};
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
  max-width: 100%;
  text-overflow: ${props => props.truncate && 'ellipsis'};
  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 700;
    max-width: 100%;
    line-height: 1.45;
  }
`

export const Paragraph = styled.p`
  text-align: ${props => props.center ? 'center' : ''};
  font-size: ${props => props.fontSize || '16px'};
  max-width: ${props => props.mw || 'fit-content'};
  margin: ${props => props.noMargin && '0' || '0'};
  line-height: ${props => props.lineHeight || 1.5};
  padding: ${props => props.padding || ''};
  color: ${props => props.secondary ? props.theme.text.secondary : props.theme.text.primary};
  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: 300;
    // overflow: hidden;
    margin: 0;
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
    max-width: 100%;
  }
  @media (max-width: 768px) {
    // max-width: ${props => props.med || '640px'};
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
  text-align: ${props => props.textAlign && 'center'};
`

const Btn = styled.button`
  border-radius: ${props => props.radius ? props.radius : '4px'};
  padding: ${props => props.small
    && '.375rem .75rem' || props.medium
    && '6px 9px' || props.big 
    && '14px'
    || '10px 14px'};
  font-size: ${props => props.small ? '12px' : '16px'};
  background: ${props => props.active && props.theme.primaryColor || props.bg && props.theme.general[props.bg] || props.theme.primaryColor};
  color: ${props => props.btnColor && props.theme[props.btnColor] || props.theme.onPrimary};
  border: ${props => props.outline ? `${props.fat ? '2px' : '1px'} solid ${props.theme[props.outline] || props.theme.primaryColor}` : 'none'};
  font-family: 'Sans';
  /* border: ${props => props.border ? props.border : 'none'}; */
  font-weight: ${props => props.bold && 'bold' || 'normal'};
  cursor: ${props => props.link ? 'pointer' : 'cursor'};
  outline: none;
  line-height: 1.5;
  margin: ${props => props.margin ? props.margin : ''};
  box-shadow: ${props => props.theme.shadows[1]};
  &:hover {
    background: ${props => props.theme.hover};
  }
  @media (max-width: 450px) {
    font-size: 12px;
    font-weight: normal;
    // padding: 1px 4px;
  }
`

const LangBtn = styled(Btn)`
  position: relative;
  background: lightblue;
  // background: ${props => props.theme.categoryColor};
  // color: ${props => props.theme.color};
  color: #111;
  padding: 0.54rem 0.85rem;
  font-size: 12px;
  font-weight: 400;
  font-family: 'Roboto';
  outline: none;
  text-align: center;
  border: none;
  border-radius: 6px;
  margin: 0 6px;
  margin-left: 16px;
  z-index: 1;
`

export const Button = props => (
  props.langBtn && 
      <LangBtn {...props} >{props.children}</LangBtn>
     || <Btn onClick={props.onClick} {...props}>
      {props.children}
    </Btn>
)


const BaseAnimation = styled.div`  
  animation-duration: ${props => props.duration};  
  animation-timing-function: ${props => props.timingFunction};      
  animation-delay: ${props => props.delay};  
  animation-iteration-count: ${props => props.iterationCount};  
  animation-direction: ${props => props.direction}; 
  animation-fill-mode: ${props => props.fillMode};  
  animation-play-state:  ${props => props.playState};  
  display: ${props => props.display};
`

BaseAnimation.defaultProps = {  
  duration: '1s',
  timingFunction: 'ease',
  delay: '0s',
  iterationCount: '1',
  direction: 'normal',
  fillMode: 'both',
  playState: 'running',
  display: 'block'
}; 

const fadeInAnimation = keyframes`
  from {
    transform: scale(0.5);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const FadeIn = styled(BaseAnimation)`
  animation-name: ${fadeInAnimation};
`
