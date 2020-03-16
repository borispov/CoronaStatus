import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
  display: grid;
  background: grey;
  font-size: 1.25rem;
  text-align: center;
  border-radius: 2rem;
  max-width: 20rem;
  align-content: center;
  justify-content: center;
  background: #d9d9d9;
  color: #014014;
`

const StatBlock = ({ title, data }) => {
  return (
    <Block>
      <h3>{title}:</h3>
      <span>{data}</span>
    </ Block>
  )
}

export default StatBlock;
