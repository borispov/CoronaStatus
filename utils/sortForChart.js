import { themes } from './themes'

const theme = {
  ...themes['common'],
  ...themes['light']
}

const firstWhole = (arr, n = 0) => {
  if (arr[n] > 0) return n
  if (arr[n] == undefined) return 0
  n++
  return firstWhole(arr, n)
}

const parseLabel = label => {
  let d = new Date(label)
  console.log(label)
  return d.getDate() + '.' + ('0' + (d.getMonth()+1)).toString()
}

const sortForChart = obj => {
  const { cases, deaths } = obj.timeline;
  const labels = Object.keys(cases).map(parseLabel);
  const label = obj.country;

  const datasets = [
    {
      label: 'cases',
      data: cases,
      backgroundColor: '#fc3111',
      borderColor: theme && theme.successDefault,
      strokeColor: theme && theme.successDefault,
      pointRadius: 2,
      borderWidth: 1,
      fill: true,
    },
    // {
    //   label: 'deaths',
    //   data: deaths,
    //   backgroundColor: 'rgba(29,82,209,1) 100%)',
    //   backgroundColor: '#333',
    //   borderColor: theme && theme.blue,
    //   strokeColor: theme && theme.blue,
    //   pointRadius: 2,
    //   borderWidth: 1,
    // },

  ];

  return {
    datasets, labels, label
  }
}


const sortForChart2 = (obj) => {

  const zeroNull = c => c === null ? 0 : c
  const sortedObj = obj.sort((a,b) => new Date(a.date) - new Date(b.date))

  const initCasesArray = sortedObj.map(o => o.total_cases)
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
      borderColor: theme && theme.successDefault,
      strokeColor: theme && theme.successDefault,
      pointRadius: 2,
      borderWidth: 1,
      fill: true,
    },
    {
      label: 'deaths',
      data: deaths,
      backgroundColor: 'rgba(29,82,209,1) 100%)',
      backgroundColor: '#333',
      borderColor: theme && theme.blue,
      strokeColor: theme && theme.blue,
      pointRadius: 2,
      borderWidth: 1,
    },
    {
      label: 'cases',
      data: cases,
      backgroundColor: '#2A4561',
      borderColor: theme && theme.primaryVariant || '#6200ee',
      strokeColor: theme && theme.primaryLight +'11' || '#ADFF2F',
      borderWidth: 1,

      borderCapStyle: 'butt',
      borderJoinStyle: 'miter',
      pointHoverRadius: 5,
      pointHoverBorderWidth: 3,
      pointRadius: 1,
      pointHitRadius: 1,

    }
  ]

  return {
    datasets,
    labels,
    label
  }
}

export default sortForChart
