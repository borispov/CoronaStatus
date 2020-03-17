import styled from 'styled-components'
import useStats from '../utils/useStats'
import { useState, useEffect } from 'react'
import Stats from './Stats'

const Input = styled.input`
  margin: 54px 0 auto;
  outline: none;
  max-width: 420px;
  text-align: center;
  border-radius: 6px;
  background: #f1f1f1;
  font-size: 1.1rem;
`

export default () => {
  const [country, setCountry] = useState('')
  const [inputValue, setInput] = useState('')
  const url = 'https://corona.lmao.ninja/countries/'
  // const url = 'https://corona.lmao.ninj/'
  const handleChange = e => setInput(e.target.value)
  const handleSubmit = e => {
    e.preventDefault();
    setCountry(inputValue)
  }

  return (
    <div>
      <Stats url={url} cn={country} />
      <form onSubmit={handleSubmit}>
        <label>
          Search For Country:
          <Input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
  

}
