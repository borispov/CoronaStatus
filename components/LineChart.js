import React from 'react';
import {Line} from 'react-chartjs-2';

const popVal = o => Object.values(o)[0]

const defaultColors = [
  'rgba(112, 120, 176, 1)',
  'rgba(233,233,100,1)',
  'rgba(213, 199, 23, 1)',
  'rgba(245, 55, 66, 1)',
  'rgba(18, 18, 21, 1)'
]

const defaultSettings = {
  // fillColor: "rgba(220,220,220,0.2)",
  // strokeColor: "rgba(220,220,220,1)",
  // pointColor: "rgba(220,220,220,1)",
  // pointStrokeColor: "#fff",
  // pointHighlightFill: "#fff",
  // pointHighlightStroke: "rgba(220,220,220,1)",
  // pointBackgroundColor: '#fff',
  // pointBorderWidth: 1,
  // pointHoverRadius: 5,
  // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  // pointHoverBorderColor: 'rgba(220,220,220,1)',
  // pointHoverBorderWidth: 2,
  // pointRadius: 1,
  // pointHitRadius: 10,
}

const parseDatasets = arrayOfSets => {
  return arrayOfSets.map(set => ({
    ...defaultSettings,
    ...set
  }))
}

export default ( props ) => {

  const data = {
    labels: props.labels,
    datasets: props.datasets && parseDatasets(props.datasets)
  };

  console.log(data);

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
        display: true
    },
    tooltips: {
        titleFontFamily: 'Open Sans',
        // backgroundColor: 'rgba(0,0,0,0.3)',
        titleFontColor: 'black',
        caretSize: 5,
        cornerRadius: 3,
        xPadding: 10,
        yPadding: 10
    }
};

  return (
    <div>
      <h2>{props.label}</h2>
      <Line
        data={data}
        width={100}
        options={options}
        height={30}
      />
    </div>
  )
}
