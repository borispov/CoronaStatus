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
  font-size: ${props => props.fontSize || '3rem'};
  color: ${props => props.color || props.theme.color};
  font-family: ${props => props.font || 'Quicksand'};
  font-weight: ${props => props.weight || '400'};
  line-height: 1.5;
`

export const Heading2 = styled.h2`
  font-size: ${props => props.fontSize || '1.125rem'};
  padding: ${props => props.padding || ''};
  color: ${props => props.color || props.theme.color};
  font-family: ${props => props.font || 'Montserrat'};
  background: ${props => props.bg || ''};
  white-space: ${props=> props.nowrap || ''};
  max-width: 100%;
  text-overflow: ${props => props.truncate && 'ellipsis'};
  @media (max-width: 768px) {
    font-size: .875rem;
    font-weight: 700;
    max-width: 100%;
    line-height: 1.45;
  }
`

export const Paragraph = styled.p`
  text-align: ${props => props.center ? 'center' : ''};
  font-size: ${props => props.fontSize || '1rem'};
  max-width: ${props => props.mw || 'fit-content'};
  margin: ${props => props.noMargin && '0' || '0'};
  line-height: ${props => props.lineHeight || 1.5};
  padding: ${props => props.padding || ''};
  color: ${props => props.secondary ? props.theme.text.secondary : props.theme.text.primary};
  direction: ${props => props.direction || 'inherit'};
  @media (max-width: 768px) {
    font-size: 0.75rem;
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
  font-size: 1rem;
  padding: ${props => props.medium
    && '0.375em 0.55em' || props.big 
    && '0.875em'
    || '.5em .625em'};

  ${props => props.small && css`
      font-size: .75em;
      padding: 0 1em;
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
    font-size: 0.75rem;
    letter-spacing: 0.5px;
  }
  @media (max-width: 344px) {
    padding: 2px 4px;
    padding: 0.125rem 0.25rem;
    letter-spacing: 0.2px;
  }

  ${props => props.KoFi && 
    css`
      font-family: ${props.fontFamily};
      font-weight: 700;
      padding: 0em 1em;
      letter-spacing: 1.75px;
      color: ${props => props.theme.white};
      cursor: pointer;
      background: ${props => props.theme.kofi};
      // margin-top: .4em;
      display: inline-flex;
      justify-content: space-around;
      align-items: center;
      align-self: end;
      border: none;
      text-shadow: 0 1px 1px rgba(34, 34, 34, 0.05);
      box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
      @media (max-width: 450px) {
        padding: 0px 12px;
        margin: 0 2px;
        font-size: 14px;
        border-radius: 7px;
      }
      .kofitext {
          color: #fff !important;
          vertical-align: middle;
          letter-spacing: -0.15px!important;
          text-wrap: none;
          vertical-align: middle;
          line-height: 33px !important;
          padding: 0;
          text-align: center;
          text-decoration: none!important;
          text-shadow: 0 1px 1px rgba(34, 34, 34, 0.05);
      }
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
