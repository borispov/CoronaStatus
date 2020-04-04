import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
  position: relative;
  margin: 0;
  padding: 16px 8px;
  text-align: center;
  border-radius: 6px;
  align-content: center;
  justify-content: space-between;
  color: ${props => props.theme.onBg};
`

const Title = styled.h3`
  font-weight: 400;
  font-size: 18px;
  text-decoration: underline;
  letter-spacing: 1px;
  color: ${props => props.theme.onBg};
  margin-bottom: 6px;
`

const Span = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin: 12px 0 0 0;
  color: ${props => props.theme.color}
`

const StatBlock = ({ title, data }) => {
  return (
    <Block>
      <Title>{title}</Title>
      <Span>{data}</Span>
    </ Block>
  )
}

export default StatBlock;
