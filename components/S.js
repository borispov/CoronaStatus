import styled, { withTheme, keyframes, css } from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.column && 'column' || 'row'};
  justify-content: ${props => props.justify || 'center'};
  margin: ${props => props.margin || '0 2px'};
  color: ${props => props.color || ''};
  align-items: ${props => props.alignItems || ''};
  flex: ${props => props.flex};
  background: ${props => props.bgColor === 'inverse' ? props.theme.color : props.bgColor === 'bg' ? props.theme.bgColor : ''};
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
  direction: ${props => props.direction || 'inherit'};
  // direction: ${props => props.direction || props.rtl ? 'rtl' : 'inherit'};
  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: 300;
    // overflow: hidden;
    margin: 0;
  };
  ${props => props.centered && css`
      margin: 0 auto;
  `};
`

export const simpleWrapper = styled.div`
  background: ${props => props.theme.bg || props.theme.bgColor};
  // color: ${props => props.theme.color};
  direction: ltr;
`

export const Container = styled.div`
  direction: ${props => props.direction || ''};
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
  // width: 85%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  text-align: ${props => props.textAlign && 'center'};
`

const Btn = styled.button`
  border-radius: ${props => props.radius ? props.radius : '4px'};
  font-size: 16px;
  padding: ${props => props.medium
    && '6px 9px' || props.big 
    && '14px'
    || '8px 10px'};

  ${props => props.small && css`
      font-size: 12px;
      padding: 0rem 1rem;
  `};


  background: ${props => props.active && props.theme.primaryColor || props.bg && props.theme.general[props.bg] || props.theme[props.bg] || props.theme.primaryColor};
  color: ${props => props.active ? props.theme.onPrimary : props.btnColor && props.theme[props.btnColor] || props.theme.general.white};
  border: ${props => props.outline ? `${props.fat ? '2px' : '1px'} solid ${props.theme[props.outline] || props.theme.primaryColor}` : 'none'};
  font-weight: ${props => props.bold && 'bold' || 'normal'};
  font-family: 'Rubik';
  cursor: ${props => props.link ? 'pointer' : 'cursor'};
  outline: none;
  line-height: 1.5;
  margin: ${props => props.margin ? props.margin : ''};
  box-shadow: ${props => props.theme.shadows[1]};
  letter-spacing: ${props => props.letterSpace ? '1.5px' : '0'};
  transition: all 0.3s ease-in-out;
  &: hover {
    transform: ${props => props.hoverUp ? 'translateY(-5%)': ''};
    background: ${props => !props.active && props.hoverColor && props.theme[props.hoverColor]};
    color: ${props => !props.active && props.hoverColor ? props.theme.onPrimary : ''};
  }
  @media (max-width: 450px) {
    font-size: 12px;
    font-weight: normal;
    letter-spacing: 0.5px;
  }
  @media (max-width: 344px) {
    padding: 2px 4px;
    letter-spacing: 0.2px;
  }

  ${props => props.KoFi && 
    css`
      font-family: ${props.fontFamily};
      font-weight: 700;
      margin-left: 4px;
      margin-right: 4px;
      padding: 0 12px;
      letter-spacing: 1.75px;
      color: ${props => props.theme.white};
      cursor: pointer;
      background: ${props => props.theme.kofi};
      display: inline-flex;
      justify-content: space-around;
      align-items: center;
      border: none;
    `
  };

`

export const Button = props => (
  <Btn onClick={props.onClick} {...props}>
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
  timingFunction: 'ease-in-out',
  delay: '0s',
  iterationCount: '1',
  direction: 'normal',
  fillMode: 'both',
  playState: 'running',
  display: 'block'
}; 

const fadeInAnimation = keyframes`
  from {
    transform: ${props => props.noScale ? '' : scale(0.5)};
    opacity: 0;
  }

  to {
    transform: ${props => props.noScale ? '' : scale(1)};
    opacity: 1;
  }
`;

export const FadeIn = styled(BaseAnimation)`
  animation-name: ${fadeInAnimation};
`
