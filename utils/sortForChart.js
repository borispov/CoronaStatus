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

const sortForChart = obj => {

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
      borderWidth: 2,
      fill: true,
      datalabels: {
        display: ctx => ctx.dataIndex % 2,
        align: 'end',
        anchor: 'end'
      }
    },
    {
      label: 'deaths',
      data: deaths,
      backgroundColor: 'rgba(29,82,209,1) 100%)',
      borderColor: 'rgba(21, 21, 21, 1)',
      strokeColor: "rgba(222, 222, 34, 1)",
      pointRadius: 3,
      borderWidth: 3,
      datalabels: {
        display: ctx => ctx.dataIndex % 2,
        align: 'end',
        anchor: 'end'
      }
    },
    {
      label: 'cases',
      data: cases,
      backgroundColor: 'rgba(208,42,55,1)',
      borderColor: 'rgba(210, 50, 120, 1)',
      strokeColor: "rgba(200, 200, 200, 1)",
      pointBorderColor: 'rgba(75,10,192,1)',
      pointBackgroundColor: '#fff',
      pointHoverBackgroundColor: 'rgba(45, 20, 19, 1)',
      pointRadius: 2,
      borderWidth: 3,
      fillColor: 'rgba(230, 15, 66, 1)',
      datalabels: {
        display: ctx => ctx.dataIndex % 2,
        align: 'end',
        anchor: 'end'
      }
    }
  ]

  return {
    datasets,
    labels,
    label
  }
}

export default sortForChart
