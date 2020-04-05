// meant for Line Chart Cases/Deaths Chart

const firstWhole = (arr, n = 0) => {
  if (arr[n] > 0) return n
  if (arr[n] == undefined) return 0
  n++
  return firstWhole(arr, n)
}

const parseLabel = label => {
  let d = new Date(label)
  return d.getDate() + '.' + ('0' + (d.getMonth()+1)).toString()
}

const sortForChart = (obj, theme) => {

  const zeroNull = c => c === null ? 0 : c
  const sortedObj = obj.sort((a,b) => new Date(a.date) - new Date(b.date))

  const initCasesArray = sortedObj.map(o => o.total_cases)
  // console.log(initCasesArray);
  const firstNumIndex = firstWhole(initCasesArray)
  const fObj = sortedObj.slice(firstNumIndex)
  const cases = fObj.map(o => o.total_cases)
  const labels = fObj.map(o => parseLabel(o.date))
  const deaths = fObj.map(o => zeroNull(o.total_deaths))
  const newCases = fObj.map(o => zeroNull(o.new_cases))
  const label = obj[0].location

  const datasets = [
    {
      label: 'new cases',
      data: newCases,
      backgroundColor: '#fc3111',
      borderColor: '#fc3111',
      strokeColor: '#301934',
      pointRadius: 2,
      borderWidth: 4,
      fill: true,
    },
    {
      label: 'deaths',
      data: deaths,
      backgroundColor: 'rgba(29,82,209,1) 100%)',
      borderColor: '#b00020',
      strokeColor: "rgba(222, 222, 34, 1)",
      pointRadius: 1,
      borderWidth: 4,
    },
    {
      label: 'cases',
      data: cases,
      backgroundColor: '#2A4561',
      borderColor: theme && theme.analogous || '#6200ee',
      strokeColor: "#ADFF2F",
      borderWidth: 5,

      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#3700B3',
      pointHoverBorderColor: '#3700B399',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,

    }
  ]

  return {
    datasets,
    labels,
    label
  }
}

export default sortForChart
