import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
  position: relative;
  margin: 0;
  padding: 16px 12px;
  background: ${props => props.theme.bgColor};
  font-size: 18px;
  text-align: center;
  border-radius: 6px;
  align-content: center;
  justify-content: space-between;
  // box-shadow: 0 1px 12px 2px rgba(20,20,20,0.1);
  color: ${props => props.theme.color};
`

const Title = styled.h3`
  font: 'Helvetica';
  text-decoration: underline;
  letter-spacing: 1px;
  color: ${props => props.theme.textColor};
  margin-bottom: 6px;
`

const Span = styled.span`
  font-size: 18px;
  font-weight: 700;
  margin: 12px 0 0 0;
  color: ${props => props.theme.color}
`

const StatBlock = ({ title, data }) => {
  return (
    <Block>
      <Title>{title}:</Title>
      <Span style={{fontSize: '18px', fontWeight: 'bold', margin: '12px 0 0 0'}}>{data}</Span>
    </ Block>
  )
}

export default StatBlock;
