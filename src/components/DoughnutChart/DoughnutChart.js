
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = props => {
  const data = {
    datasets: [{
      data: props.data,
      backgroundColor: [
        '#29b6f6',
        '#00e676',
        '#ffee58',
        '#1a237e',
        '#e91e63',
        '#ab47bc',
        '#ff5722'
      ],
      borderColor: [
        '#29b6f6',
        '#00e676',
        '#ffee58',
        '#1a237e',
        '#e91e63',
        '#ab47bc',
        '#ff5722'
      ]
    }],
    labels: props.labels,
  };


  return (  
    <Doughnut data={data} legend={{
      position: 'right', 
      labels: {
        fontSize: 10,
        fontColor: '#00ebff',
        fontFamily: 'Jura'
      }
    }} />
  )
}

export default DoughnutChart;