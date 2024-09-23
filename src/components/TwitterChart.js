import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';

Chart.register(...registerables);

const TwitterChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Twitter Followers',
        data: [100, 200, 300, 400, 500],
        borderColor: 'rgba(29, 155, 240, 1)',
        backgroundColor: 'rgba(29, 155, 240, 0.5)',
        fill: true,
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

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Twitter Followers Chart</h5>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TwitterChart;
