// src/components/TikTokChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const TikTokChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'TikTok Engagement',
        data: [15, 25, 40, 55, 70],
        borderColor: 'rgba(255, 45, 85, 1)', // TikTok red
        backgroundColor: 'rgba(255, 45, 85, 0.2)',
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

export default TikTokChart;
