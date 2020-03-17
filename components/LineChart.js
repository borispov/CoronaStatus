import React from 'react';
import {Line} from 'react-chartjs-2';

const popVal = o => Object.values(o)[0]

export default ({ info }) => {

  const data = {
    labels: ['Infected', 'new', 'recovered', 'critical', 'deaths'],
    datasets: [
      {
        label: 'Outbreak info',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        backgroundColor: [
          'rgba(112, 120, 176, 1)',
          'rgba(233,233,100,1)',
          'rgba(213, 199, 23, 1)',
          'rgba(245, 55, 66, 1)',
          'rgba(18, 18, 21, 1)'
        ],
        borderColor: [
          'rgba(75,192,192,1)',
        ],
        borderCapStyle: 'butt',
        options: {
          scales: { yAxes: [{ stacked: true }] }
        },
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: info.map(popVal)
      }
    ]
  };


  return (
    <div>
      <h2>Line Example</h2>
      <Line 
        data={data}
        width={40}
        height={12}
      />
    </div>
  )
}
