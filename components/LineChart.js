import React from 'react';
import {Line} from 'react-chartjs-2';

const popVal = o => Object.values(o)[0]

const defaultSettings = {
  // fillColor: "rgba(220,220,220,0.2)",
  strokeColor: "rgba(220,220,220,1)",
  pointColor: "rgba(220,220,220,1)",
  pointStrokeColor: "#fff",
  pointHighlightFill: "#fff",
  pointHighlightStroke: "rgba(220,220,220,1)",
  pointBackgroundColor: '#111',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointHoverBorderWidth: 2,
  pointHitRadius: 10,
  fill: false
}

const filterBy5 = (x, i) => !(i % 2)
const subtractArray = arr => arr.filter(filterBy5)

const parseDatasets = arrayOfSets => {
  return arrayOfSets.map(set => ({
    ...defaultSettings,
    ...set,
    // data: subtractArray(set.data)
  }))
}

export default ( props ) => {

  const data = {
    // labels: subtractArray(props.labels),
    labels: props.labels,
    datasets: props.datasets && parseDatasets(props.datasets)
  };

  var options = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
        easing: 'easeInOutQuad',
        duration: 520
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
            max: 700,
            min: 0,
            stepSize: 10
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
        backgroundColor: 'rgba(0,0,0,0.3)',
        titleFontColor: 'black',
        caretSize: 5,
        cornerRadius: 3,
        xPadding: 10,
        yPadding: 10
    }
};

  return (
    <div style={{marginTop: '32px'}}>
      <h1 style={{fontSize: '1.65rem'}}>{props.label}</h1>
      <Line
        data={data}
        width={100}
        options={options}
        height={30}
      />
    </div>
  )
}
