import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

// Register necessary components
Chart.register(...registerables);

const YouTubeChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'YouTube Subscribers',
        data: [120, 190, 300, 500, 600],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
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
        <h5 className="card-title">YouTube Subscribers Chart</h5>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default YouTubeChart;
