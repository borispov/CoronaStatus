import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
  margin: 0;
  padding: 2rem;
  background: ${props => props.theme.bgColor};
  font-size: 1.125rem;
  text-align: center;
  border-radius: 6px;
  max-width: 12rem;
  align-content: center;
  justify-content: center;
  box-shadow: ${props => props.theme.boxShadow};
  color: ${props => props.theme.color};
`

const Title = styled.h3`
  font: 'Helvetica';
  letter-spacing: 1px;
`

const StatBlock = ({ title, data }) => {
  return (
    <Block>
      <Title>{title}:</Title>
      <span style={{fontSize: '1.125rem'}}>{data}</span>
    </ Block>
  )
}

export default StatBlock;
