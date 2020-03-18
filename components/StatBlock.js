import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
  margin: 0;
  padding: 0;
  background: grey;
  font-size: 1rem;
  text-align: center;
  border-radius: 8px;
  max-width: 10rem;
  align-content: center;
  justify-content: center;
  background: #d9d9d9;
  color: #014014;
`

const Title = styled.h3`
  font: 'Helvetica';
  letter-spacing: 1px;
`

const StatBlock = ({ title, data }) => {
  return (
    <Block>
      <Title>{title}:</Title>
      <span>{data}</span>
    </ Block>
  )
}

export default StatBlock;
