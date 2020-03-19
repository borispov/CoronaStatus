// meant for Line Chart Cases/Deaths Chart

const sortForChart = obj => {

  const labels = obj.map(o => o.date)
  const deaths = obj.map(o => o.total_deaths)
  const cases = obj.map(o => o.total_cases)
  const newCases = obj.map(o => o.new_cases)
  const label = obj.location


  const datasets = [
    {
      label: 'new cases',
      data: newCases,
      backgroundColor: '#fcfb11',
      strokeColor: '#301934',
      pointRadius: 0
    },
    {
      label: 'deaths',
      data: deaths,
      backgroundColor: 'rgba(29,82,209,1) 100%)',
      strokeColor: "rgba(222, 222, 34, 1)",
      pointRadius: 0
    },
    {
      label: 'cases',
      data: cases,
      backgroundColor: 'rgba(208,42,144,1)',
      strokeColor: "rgba(200, 200, 200, 0.3)",
      pointRadius: 0
    }
  ]

  return {
    datasets,
    labels,
    label
  }
}

export default sortForChart
