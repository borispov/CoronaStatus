import styled, { css } from 'styled-components'


export const Column = styled.div`
  display: flex;
  flex-flow: column wrap;
  direction: ${props => props.direction ? props.direction : ''};
  align-items: start;

  width: 100%;
  background: #fafafa;
  padding: 1em 1em .125em 1em;
  border-radius: 2px;
  border-bottom: 1px solid #e4e7eb;
  &:last-child {
    border-bottom: none;
  }

  ${({ world }) => (!world) && css`
    border: none;
    border-left: 1px solid #e4e7eb;
    border-bottom: 6px solid ${props => props.label === 'recovered' 
      ? props.theme.recovered
      : props.label === 'deaths'
        ? props.theme.purpleComp
        : props.label === 'todayCases'
          ? props.theme.error2
          : props.theme.primaryColor
    } !important;
    border-radius: 0px !important;
    box-shadow: none;
  `};

  @media (min-width: 660px) {
    box-shadow: none;
    height: auto;
    &:last-child {
      border-left: none;
    }
    flex: 1 0 ${props => props.world ? '249px' : '235px'};
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
  direction: ${props => props.direction ? props.direction : ''};
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  box-shadow: ${props => props.theme.shadows[5]};
  margin-bottom: 28px;
  border-radius: 8px;
  // border: 1px solid #e4e7eb;
  border: none;
  margin-top: 1.75em;
  margin-left: auto;
  margin-right: auto;
  @media (min-width:660px) and (max-width: 920px) {
    max-width: 620px;
    flex-flow: ${props => props.world ? 'row wrap' : 'row wrap'};
  }
  @media (min-width: 921px) and (max-width: 1023px) {
    max-width: ${props => props.world ? '620px' : '620px'};
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
    font-size: 0.85rem;
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
  font-size: 1.5rem;
  font-weight: 500;
  color: ${props => props.label === 'recovered' 
    ? props.theme.recovered
    : props.label === 'deaths'
      ? props.theme.purpleComp
      : props.label === 'todayCases'
        ? props.theme.error2
        : props.theme.primaryColor
  };
  letter-spacing: 0.4px;
  font-family: 'Rubik';
  padding: 0;
  margin: 0;
  line-height: 1.65;

  span {
    font-size: .75rem;
    font-family: 'Rubik';
    color: #717171;
    margin-left: 1em;
    margin-right: 1em;
    margin-bottom: 4px;
  }

  @media (min-width: 660px) {
    span {
      font-size: .625rem;
      letter-spacing: -0.2px;
    }
  }

  @media (min-width:660px) and (max-width: 920px) {
    h1 {
      font-size: 0.875rem;
      line-height: 1.65;
      letter-spacing: 0.5px;
    }
  }
  @media (min-width: 921px) and (max-width: 1023px) {
    h1 {
      font-size: 0.875rem;
      letter-spacing: 0.6px;
    }
  }
  @media (min-width: 1024px) {
    h1 {
      font-size: 1rem;
    }
  }
`
