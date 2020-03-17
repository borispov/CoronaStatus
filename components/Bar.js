import { Bar } from 'react-chartjs-2';

const prop = o => k => o[k]
const popVal = o => Object.values(o)[0]
const popKey = o => Object.keys(o)[0]

export default ({ info }) => {

  const data = {
    labels: info.map(popKey),
    datasets: [
      {
        label: 'Outbreak Info',
        backgroundColor: [
          'rgba(112, 120, 176, 1)',
          'rgba(233,233,100,1)',
          'rgba(213, 199, 23, 1)',
          'rgba(245, 55, 66, 1)',
          'rgba(18, 18, 21, 1)'
        ],
        borderColor: 'rgba(255,99,132,0.8)',
        borderWidth: 1.5,
        barPercentage: 0.7,
        categoryPercentage: 0.8,
        minBarLength: 10,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: info.map(popVal)
      }
    ]
  };

  return (
    <div>
      <h2>Outbreak Information</h2>
      <Bar
        data={data}
        width={40}
        height={12}
        options = {{
          maintainAspectRatio: true,
          scales: {
            xAxes: [{
              gridLines: {
                offsetGridLines: true
              }
            }]
          }
        }}
      />
    </div>
  )
}
