import { Line, defaults } from 'react-chartjs-2'
import { useRef } from 'react'
import 'chartjs-plugin-datalabels'
import styled, { withTheme, keyframes }  from 'styled-components'
import { FadeIn } from './S'

defaults.global.defaultFontFamily = "'PT Sans', sans-serif"

const Div = styled.div`
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 48px;
  height: 375px;
  text-align: center;
  width: 80%;
  direction: rtl;
  > * {
    direction: rtl;
  }
  h1 {
    text-shadow: ${({ theme }) => theme.shadows[1]};
  }

  canvas {
    // background-color: #ededed;
    border-radius: 8px;
  }

  @media (max-width: 560px) {
    height: 40vh;
    margin-bottom: 48px;
    width: 100vw;
    max-width: 100%;
  }
`

const noChartDisplaySettings = {
  // backgroundColor: 'transparent',
  // strokeColor: 'transparent',
  // borderColor: 'transparent',
  showLine: false,
  borderWidth: 0,
  pointHitRadius: 0,
  pointHoverRadius: 0,
  pointHoverBorderWidth: 0,
  pointRadius: 0,
  pointHitRadius: 0,
  fill: false,
}


const cutCaseCount = ({ data}) => data.length > 30 ? subtractArray(data) : data
const displayOnChart = dset => ({ ...dset, data: cutCaseCount(dset), fill: false })
const dontDisplayOnChart = dset => ({ ...dset, data: cutCaseCount(dset), ...noChartDisplaySettings })

const sortForDisplay = dset => {
  return dset.label !== 'cases'
    ? dontDisplayOnChart(dset)
    : displayOnChart(dset)
}

const filterBy5 = (x, i) => !(i % 8)
const subtractArray = arr => arr.filter(filterBy5).concat(arr[arr.length -1])

const parseDatasets = (arrayOfSets, fill) => {

  return arrayOfSets.map(sortForDisplay)

  // return arrayOfSets.map(set => ({
  //   ...set,
  //   data: set.data.length > 30 ? subtractArray(set.data) : set.data,
  //   fill: fill || false,
  // }))
}

const LineChart = ( props, {theme} ) => {

  const chartRef = useRef()

  const data2 = {
    labels: props.labels.length > 30 ? subtractArray(props.labels) : props.labels,
    datasets: parseDatasets(props.data, props.fill)
  };

  const data = canvas => {
    const ctx = canvas.getContext('2d')

    return {
      ...data2,
    }
  }
  

  var options = {
    responsive: true,
    maintainAspectRatio: false,
    onAnimationComplete: function(){
      this.showTooltip(this.datasets[0].points, true)
    },
    layout: {
      padding: {
        left: 5,
        right: 15,
        top: 15,
        bottom: 15
      }
    },
    animation: {
        easing: 'easeInOutQuad',
        duration: 999
    },
    scales: {
        xAxes: [{
            gridLines: {
                backgroundColor: props.theme.analogous,
                display: false,
                drawBorder: true,
                drawTicks: true,
                color: 'rgba(0, 0, 0, 0.05)',
                lineWidth: 1,
                zeroLineWidth: 1,
            }
        }],
        yAxes: [{
          ticks: {
            display: true,
            maxTicksLimit: 6,
          },
            gridLines: {
                backgroundColor: props.theme.primaryVariant,
                display: false,
                drawBorder: false,
                // drawBorder: true,
                drawTicks: true,
                color: 'rgba(0, 0, 0, 0.05)',
                lineWidth: 1,
                zeroLineWidth: 1,
            }
        }]
    },
    elements: {
        line: {
            tension: 0.5
        }
    },
    legend: {
      display: props.showLegend && true,
      position: 'bottom'
    },

    tooltips: {
      displayColors: true,
      mode: 'index',
      titleAlign: 'center',
      position: 'nearest',
      intersect: false,
      bodySpacing: 4,
      padding: 15,
      titleFontFamily: 'Rubik',
      backgroundColor: props.theme.dark,
      titleFontColor: '#f9f9f9',
      xPadding: 24,
      yPadding: 14,
    },
    hover: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
       datalabels: {
        display: ctx => {
          let i = ctx.dataIndex
          if (ctx.dataset.label !== 'cases') return 0
          return i === Math.floor(ctx.dataset.data.length / 3) || i === Math.floor(ctx.dataset.data.length * 0.66) || i === (ctx.dataset.data.length - 1)
          // return i === 0 || i === (ctx.dataset.data.length - 1) || !(i % 4)
        },
        align: ctx => { return ctx.dataIndex === ctx.dataset.data.length -1 ? 'end' : 'end' },
        anchor: 'end',
        padding: {
          left: 0,
          right: -50,
          top: -5,
          bottom: 0
        },
        color: props.theme.color,
         labels: {
           title: { font: { weight: 'bold', style: 'italic', family: 'Rubik' } }
         }
       }
    }
}

  return (
      <Div>
          <Line
            label={props.label}
            data={data}
            width={100}
            options={options}
            // height={40}
          />
      </Div>
  )
}

export default withTheme(LineChart)
