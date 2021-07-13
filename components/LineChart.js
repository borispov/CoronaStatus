import { Line, defaults } from 'react-chartjs-2'
import { useRef } from 'react'
import 'chartjs-plugin-datalabels'
import styled, { withTheme, keyframes }  from 'styled-components'
import { FadeIn } from './S'

import Spinner from './Spinner'
import useMobileDetect from '../utils/isMobile'
import useTranslation from '../hooks/useTranslation'

// defaults.global.defaultFontFamily = "'PT Sans', sans-serif"

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

  box-shadow: inset 16px -16px 32px -32px hsla(0,0%,0%, 0.2);

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


// if mobile, do by 8, if not do by 3

const LineChart = ( props, {theme} ) => {

  if (props.loading) {
    <Div>
      <Spinner size='big' />
    </Div>
  }

  const { t } = useTranslation()
  const chartRef = useRef()

  const showLastMonth = arr => arr.slice(Math.ceil(arr.length / 3.3))

  const filterBy5 = (x, i) => useMobileDetect().isMobile() ? !(i % 8) : !(i % 2)
  // const subtractArray = arr => arr.filter(filterBy5).concat(arr[arr.length -1])

  const subtractArray = arr => showLastMonth(arr)

  const cutCaseCount = ({ data}) => data.length > 30 ? subtractArray(data) : data

  let maxTodayValue = 0

  // quick helpers for display/non-display data sets 
  const displayOnChart = dset => ({ ...dset, label: t(dset.label, 'chartLabels'), data: cutCaseCount(dset), fill: true })
  const dontDisplayOnChart = dset => ({ ...dset, label: t(dset.label, 'chartLabels'),data: cutCaseCount(dset), ...noChartDisplaySettings })
  const sortForDisplay = dset => {
    // return (dset.label !== 'cases' && dset.label !== 'נדבקים')
    if (dset.label === 'new cases') {
      maxTodayValue = Math.max.apply(Math, [].concat(...dset.data))
    }
    return displayOnChart(dset)
    // return (dset.label !== 'new cases' && dset.label !== 'נדבקים חדשים')
    //   ? dontDisplayOnChart(dset)
    //   : displayOnChart(dset)
  }

  const parseDatasets = (arrayOfSets, fill) => arrayOfSets.map(sortForDisplay)


  const data2 = {
    labels: props.labels.length > 30 ? subtractArray(props.labels) : props.labels,
    datasets: parseDatasets(props.data, props.fill)
  };

  const data = canvas => {
    const ctx = canvas.getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0.4, props.theme.primaryColor);
    gradient.addColorStop(0, (props.theme.primaryDark));
    gradient.addColorStop(1, 'rgba(184,40,50,0.25)');

    // data2.datasets[1].fill = true
    // data2.datasets[1].backgroundColor = gradient

    return {
      ...data2,
    }
  }
  

  var options = {
    responsive: true,
    maintainAspectRatio: false,
    // onAnimationComplete: function(){
    //   this.showTooltip(this.datasets[0].points, true)
    // },
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
                display: true,
                drawBorder: true,
                drawTicks: true,
                color: 'rgba(0, 0, 0, 0.05)',
                lineWidth: 1,
                zeroLineWidth: 1,
            }
        }],
        yAxes: [{
          ticks: {
            max: maxTodayValue && maxTodayValue || 5000,
            beginsAtZero: false,
            min: 750000,
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
      intersect: true,
    },
    plugins: {
       datalabels: {
        display: ctx => {
          // when dispalying new cases, I rather set it OFF
          return false
          let i = ctx.dataIndex
          if (ctx.dataset.label !== 'cases') return 0
          return i === Math.floor(ctx.dataset.data.length / 3) || i === Math.floor(ctx.dataset.data.length * 0.66) || i === (ctx.dataset.data.length - 1)
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
