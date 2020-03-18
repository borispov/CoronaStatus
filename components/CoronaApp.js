import { useState, useEffect } from 'react'
import Input from './Input'
import Stats from './Stats'
import Header from './Header'
import useTime from '../utils/useTime'
import Chart from './Chart'
import Container from './Container'


export default () => {
  const [country, setCountry] = useState('')
  const [inputValue, setInput] = useState('')
  const url = 'http://covid19.borisky.me:3003/api/v1/'

  const { worldStats, timeError, timeLoading } = useTime()

  // <Chart type='bar' info={organizedData} label={country + '\'s Outbreak Over Time'} />

  const handleChange = e => setInput(e.target.value)
  const handleSubmit = e => {
    e.preventDefault();
    setCountry(inputValue)
  }

  const sortTimeStats = worldStats

  return (
    <div>
      <Header>Covid19 Feed</Header>

      <Stats url={url} cn={country} />


      <form 
        style={{
          width: '100%',
          margin: '54px 0 auto',
          display: 'flex',
          justifyContent: 'center'

        }}
        onSubmit={handleSubmit}>
        <label style={{fontSize: '16px'}}>
          Search For Country:
          <Input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>

    </div>
  )
  

}
