// src/components/InstagramChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const InstagramChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Instagram Engagement',
        data: [30, 45, 60, 80, 100],
        borderColor: 'rgba(193, 53, 132, 1)', // Instagram color
        backgroundColor: 'rgba(193, 53, 132, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default InstagramChart;
