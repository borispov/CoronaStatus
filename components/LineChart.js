import React from 'react';
import {Line} from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import styled from 'styled-components'

const Div = styled.div`
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 48px;
  height: 375px;
  width: 60vw;
  @media (max-width: 768px) {
    height: 40vh;
    margin-bottom: 48px;
    width: 85vw;
  }
`


const filterBy5 = (x, i) => !(i % 4)
const subtractArray = arr => arr.filter(filterBy5)

const parseDatasets = (arrayOfSets, fill) => {
  return arrayOfSets.map(set => ({
    ...set,
    data: set.data.length > 30 ? subtractArray(set.data) : set.data,
    fill: fill || false
  }))
}

export default ( props ) => {

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
        duration: 1050
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: 'rgba(200, 200, 200, 0.05)',
                lineWidth: 1
            }
        }],
        yAxes: [{
          ticks: {
            maxTicksLimit: 5,
          },
            gridLines: {
                color: 'rgba(200, 200, 200, 0.08)',
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
        titleFontFamily: 'Open Sans',
        backgroundColor: 'rgba(20,20,20, 0.3)',
        titleFontColor: '#fff',
        caretSize: 10,
        cornerRadius: 5,
        xPadding: 15,
        yPadding: 15
    },
    plugins: {
       datalabels: {
          // display: ,
        display: ctx => {
          let i = ctx.dataIndex
          return i === 0 || i === (ctx.dataset.data.length - 1) || !(i % 5)
        },
        align: ctx => { return ctx.dataIndex === ctx.dataset.data.length -1 ? 'start' : 'end' },
        anchor: 'end',
        color: props.theme.color,
         labels: {
           title: { font: { weight: 'bold', style: 'italic', family: 'monospace' } }
         }
       }
    }
};

  return (
    <Div>
      <h1 style={{fontSize: '1.65rem'}}>{props.label}</h1>
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
