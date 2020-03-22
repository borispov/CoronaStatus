import React from 'react';
import {Line} from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import styled from 'styled-components'

const filterBy5 = (x, i) => !(i % 4)
const subtractArray = arr => arr.filter(filterBy5)

const subCases = arr => arr[0]

const defaultSettings = {
  fill: true
}

const parseDatasets = (arrayOfSets, fill) => {
  return arrayOfSets.map(set => ({
    ...set,
    data: set.data.length > 30 ? subtractArray(set.data) : set.data,
    fill: fill || false
  }))
}

export default ( props ) => {

  const data = {
    labels: props.labels.length > 30 ? subtractArray(props.labels) : props.labels,
    datasets: parseDatasets(props.data, props.fill)
  };

  var options = {
    responsive: true,
    maintainAspectRatio: true,
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
            maxTicksLimit: 6,
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
      display: true,
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
          display: true,
         // color: '#292929CC',
        color: props.theme.color,
         labels: {
           title: { font: { weight: 'bold', style: 'italic', family: 'monospace' } }
         }
       }
    }
};

  return (
    <div style={{marginTop: '32px'}}>
      <h1 style={{fontSize: '1.65rem'}}>{props.label}</h1>
      <Line
        label={props.label}
        data={data}
        width={100}
        options={options}
        height={40}
      />
    </div>
  )
}
