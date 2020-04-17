import styled from 'styled-components'


export const Column = styled.div`
  display: flex;
  flex-flow: column wrap;
  direction: ${props => props.ltr ? 'ltr' : 'rtl'};
  align-items: start;
  // justify-content: center;

  width: 100%;
  background: #fafafa;
  padding: 16px 3em 12px;
  border-radius: 2px;
  border-bottom: 1px solid #e4e7eb;

  @media (min-width: 660px) {
    box-shadow: none;
    border: 1px solid #e4e7eb;
    height: auto;
    flex: 1 0 ${props => props.world ? '249px' : '235px'};
  }

  &:last-child {
    border-bottom: none;
  }

`

export const InRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-weight: 700;
  color: ${props => props.theme.primaryColor};
  justify-content: ${props => props.justify || 'space-between'};
  width: 100%;
  line-height: 1.45;
`

export const Row = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  box-shadow: ${props => props.theme.shadows[1]};
  margin-bottom: 28px;
  border-radius: 8px;
  border: 1px solid #e4e7eb;
  margin-left: auto;
  margin-right: auto;
  @media (min-width:660px) and (max-width: 920px) {
    max-width: 620px;
    flex-flow: ${props => props.world ? 'row wrap' : 'row wrap'};
  }
  @media (min-width: 921px) and (max-width: 1023px) {
    max-width: ${props => props.world ? '900px' : '620px'};
    flex-flow: ${props => props.world ? 'row wrap' : 'row wrap'};
  }
  @media (min-width: 1024px) {
    max-width: 1064px;
    flex-flow: ${props => props.world ? 'row wrap' : 'row wrap'};
  }
`

export const Percentage = styled.h1`
  font-size: 10px;
  font-weight: 500;
  color: ${props => props.theme.text.secondary};
  align-self: flex-end;
  padding-bottom: 2px;
  border-radius: 12px;
  background: #DFF7EC;
  padding: 0.5em 1em;
  span {
    font-family: 'Verdana';
    background: #DFF7EC;
    color: ${props => props.theme.primaryLight};
  }

  @media (min-width: 350px) {
    font-size: 12px;
  }

`

export const Header = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.text.primary};
  width: auto;
  letter-spacing: 0.1px;
  line-height: 1.85;

  @media (min-width:660px) and (max-width: 920px) {
    font-size: 12px;
    line-height: 1.65;
    letter-spacing: 0.025px;
  }
  @media (min-width: 921px) and (max-width: 1023px) {
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    font-size: 16x;
  }
`

export const Number = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.primaryVariant};
  letter-spacing: 0.4px;
  font-family: 'Montserrat';
  padding: 0;
  margin: 0;
  line-height: 1.65;

  span {
    font-size: 10px;
    font-family: 'Montserrat';
    letter-spacing: -0.2px;
    color: #717171;
    margin-left: 1em;
    margin-right: 1em;
    margin-bottom: 4px;
  }

  @media (min-width:660px) and (max-width: 920px) {
    h1 {
      font-size: 14px;
      line-height: 1.65;
      letter-spacing: 0.5px;
    }
  }
  @media (min-width: 921px) and (max-width: 1023px) {
    h1 {
      font-size: 12px;
      letter-spacing: 0.8px;
    }
  }
  @media (min-width: 1024px) {
    h1 {
      font-size: 16px;
    }
  }
`
