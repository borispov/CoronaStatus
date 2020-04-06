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

  const initCasesArray = sortedObj.map(o => o.confirmed)
  const firstNumIndex = firstWhole(initCasesArray)
  const fObj = sortedObj.slice(firstNumIndex)
  const cases = fObj.map(o => o.confirmed)
  const labels = fObj.map(o => parseLabel(o.date))
  const deaths = fObj.map(o => zeroNull(o.deaths))
  const label = obj[0].location

  const datasets = [
    {
      label: 'deaths',
      data: deaths,
      backgroundColor: 'rgba(29,82,209,1) 100%)',
      borderColor: 'rgba(21, 21, 21, 1)',
      strokeColor: "rgba(222, 222, 34, 1)",
      pointRadius: 1,
      borderWidth: 4,
      datalabels: {
        display: ctx => ctx.dataIndex % 2,
        align: 'end',
        anchor: 'end'
      }
    },
    {
      label: 'cases',
      data: cases,
      backgroundColor: '#2A4561',
      borderColor: theme && theme.analogous || '#6200ee',
      strokeColor: "#ADFF2F",
      pointBorderColor: 'rgba(75,10,192,0)',
      pointBackgroundColor: '#fff',
      pointHoverBackgroundColor: 'rgba(45, 20, 19, 0)',
      borderWidth: 5,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
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
