import { Bar, defaults } from 'react-chartjs-2';

defaults.global.animation = false
defaults.global.defaultFontFamily = "'PT Sans', sans-serif"

const prop = o => k => o[k]
const popVal = o => Object.values(o)[0]
const popKey = o => Object.keys(o)[0]

export default ( props ) => {

  const data = {
    labels: Object.keys(props.info),
    datasets: [
      {
        label: props.label,
        backgroundColor: [
          'rgba(112, 120, 176, 0.7)',
          'rgba(233,233,100,0.7)',
          'rgba(213, 199, 23, 0.7)',
          'rgba(245, 55, 66, 0.7)',
          'rgba(18, 18, 21, 1)'
        ],
        borderColor: 'rgba(255,99,132,0.8)',
        borderWidth: 1.5,
        barPercentage: 0.9,
        categoryPercentage: 1,
        minBarLength: 0,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        // data: props.info.map(popVal)
        data: Object.values(props.info)
      }
    ]
  };

  const options = {
    defaultFontFamily: "monospace",
    legend: {
      display: true,
      position: 'right'
    }
  }

  return (
    <div>
      <Bar
        data={data}
        width={4}
        height={1}
        options={options}
      />
    </div>
  )
}
