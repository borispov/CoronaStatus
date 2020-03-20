// meant for Line Chart Cases/Deaths Chart

const sortForChart = obj => {

  const zeroNull = c => c === null ? 0 : c

  const sortedObj = obj.sort((a,b) => new Date(a.date) - new Date(b.date))

  console.log(sortedObj);

  const labels = obj.map(o => o.date)
  const deaths = obj.map(o => zeroNull(o.total_deaths))
  const cases = obj.map(o => zeroNull(o.total_cases))
  const newCases = obj.map(o => zeroNull(o.new_cases))
  const label = obj[0].location


  const datasets = [
    {
      label: 'new cases',
      data: newCases,
      backgroundColor: '#fc3111',
      borderColor: '#fc3111',
      strokeColor: '#301934',
      pointRadius: 2,
      borderWidth: 2
    },
    {
      label: 'deaths',
      data: deaths,
      backgroundColor: 'rgba(29,82,209,1) 100%)',
      borderColor: 'rgba(21, 21, 21, 1)',
      strokeColor: "rgba(222, 222, 34, 1)",
      pointRadius: 3,
      borderWidth: 3
    },
    {
      label: 'cases',
      data: cases,
      backgroundColor: 'rgba(208,42,144,1)',
      borderColor: 'rgba(186, 50, 213, 1)',
      strokeColor: "rgba(200, 200, 200, 1)",
      pointRadius: 2,
      borderWidth: 2
    }
  ]

  return {
    datasets,
    labels,
    label
  }
}

export default sortForChart
