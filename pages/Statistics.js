import { useState, useEffect } from 'react'
import { Heading, Button, Paragraph, FadeIn, simpleWrapper, Container } from '../components/S'
import HeaderDescription from '../components/HeaderDescription'
import axios from 'axios'
import Table from '../components/Table/Table'

const baseURL = `https://corona.lmao.ninja/countries`

const Statistics = ({ isHeb, news }) => {

  const [rows, setData] = useState();
  const [ loading, setLoading ] = useState(true)

  const engHeader = `You are presented with updated data regarding Coronavirus statistics, delivered to you by a great project called Worldometers.`
  const hebHeader = `בפניכם נתונים עדכניים אודות הנגיף אשר מובאים כאן בעזרת הפרויקט הנהדר בשם worldometers`
  const text = isHeb && hebHeader || engHeader

  const engHeaders = [ 'country', 'cases', 'active', 'recovered', 'critical', 'deaths', 'todayDeaths', 'todayCases']
  const hebHeaders = [ 'מדינה', 'נדבקים', 'פעילים', 'החלימו', 'קריטי', 'מוות', 'מתו היום', 'מקרים חדשים' ]
  const headers = isHeb && hebHeaders || engHeaders

  useEffect(() => {
      async function fetchData(){
        setLoading(true)
        const { data } = await axios.get('https://corona.lmao.ninja/countries/')

        setData(data
          .map(({
            countryInfo,
            country,
            cases,
            active,
            deaths,
            recovered,
            critical,
            todayDeaths,
            todayCases }) => {
              return [{ flag: countryInfo.flag, country}, cases, active, deaths, recovered, critical, todayDeaths, todayCases]
            } ))
        }
    fetchData()
    setLoading(false)
  }, [])

  if ( loading ) return <div> Loading Contents . . .</div>


  const renderTable = rows && headers && <Table headings={headers} rows={rows} />
  return (
    <>
    <FadeIn duration="0.5s" delay="0.1s">
      <HeaderDescription txt={text} />
      {renderTable}
    </FadeIn>

    </>
  )

}
//
// Statistics.getInitialProps = async ctx => {
//     const data = await axios
//       .get('https://corona.lmao.ninja/countries/')
//     const news = data
//     return news
// }

export default Statistics
