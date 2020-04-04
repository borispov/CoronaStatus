import { Line, defaults } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import styled, { withTheme, keyframes }  from 'styled-components'
import { FadeIn } from './S'

defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
defaults.global.hover.mode = 'nearest'
defaults.global.hover.axis = 'xy'
defaults.global.hover.intersect = false


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

  @media (max-width: 768px) {
    height: 40vh;
    margin-bottom: 48px;
    width: 100vw;
    max-width: 100%;
  }
`


const filterBy5 = (x, i) => !(i % 4)
const subtractArray = arr => arr.filter(filterBy5)

const parseDatasets = (arrayOfSets, fill) => {
  return arrayOfSets.map(set => ({
    ...set,
    data: set.data.length > 30 ? subtractArray(set.data) : set.data,
    fill: fill || false,
  }))
}

const LineChart = ( props, {theme} ) => {

  const data2 = {
    labels: props.labels.length > 30 ? subtractArray(props.labels) : props.labels,
    datasets: parseDatasets(props.data, props.fill)
  };

  const data = canvas => {
    const ctx = canvas.getContext('2d')
    const gradient = ctx.createLinearGradient(0,0,100,0)

    return {
      ...data2,
      background: gradient
    }
  }
  

  var options = {
    responsive: true,
    maintainAspectRatio: false,
    onAnimationComplete: function(){
      this.showTooltip(this.datasets[0].points, true)
    },
    animation: {
        easing: 'easeInOutQuad',
        duration: 100
    },
    scales: {
        xAxes: [{
            gridLines: {
                drawBorder: true,
                drawTicks: true,
                color: 'rgba(0, 0, 0, 0.05)',
                lineWidth: 1,
                zeroLineWidth: 0.2,
            }
        }],
        yAxes: [{
          ticks: {
            maxTicksLimit: 6,
          },
            gridLines: {
                drawBorder: true,
              drawTicks: true,
              zeroLineWidth: 0.2,
                color: 'rgba(0, 0, 0, 0.05)',
                lineWidth: 1
            }
        }]
    },
    elements: {
        line: {
            tension: 0.4
        }
    },
    legend: {
      display: props.showLegend!==undefined?false:true,
      position: 'bottom'
    },
    tooltips: {
        titleFontFamily: 'Roboto',
        backgroundColor: 'rgba(20,20,20, 1)',
        titleFontColor: '#f9f9f9',
    },
    plugins: {
       datalabels: {
        display: ctx => {
          let i = ctx.dataIndex
          return i === 0 || i === (ctx.dataset.data.length - 1) || !(i % 5)
        },
        align: ctx => { return ctx.dataIndex === ctx.dataset.data.length -1 ? 'start' : 'end' },
        anchor: 'end',
        color: props.theme.color,
         labels: {
           title: { font: { weight: 'bold', style: 'italic', family: 'Roboto' } }
         }
       }
    }
};

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
