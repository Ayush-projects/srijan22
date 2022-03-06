
import React from 'react';
import { Polar } from 'react-chartjs-2';

const data = {
  datasets: [{
    data: [11, 16, 7, 17, 14],
    backgroundColor: [
      '#29b6f6',
      '#00e676',
      '#ffee58',
      '#1a237e',
      '#e91e63',
      '#ab47bc'
    ],
    borderColor: [
      '#29b6f6',
      '#00e676',
      '#ffee58',
      '#1a237e',
      '#e91e63',
      '#ab47bc'
    ]
  }],
  labels: [
    'Event Participation',
    'Workshop Participation',
    'Interests in Talks/Special Attraction',
    'Merchandise Shopping',
    'Online Engagement'
  ]
};

const PolarChart = () => {

  return (
    <Polar data={data} legend={{
        position: 'right', 
        labels: {
          fontSize: 10,
          fontColor: '#00ebff',
          fontFamily: 'Jura'
        }
      }} />
  )
}

export default PolarChart;