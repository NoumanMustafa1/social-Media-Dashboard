import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

// Register necessary components
Chart.register(...registerables);

const FacebookChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Facebook Users',
        data: [30, 40, 45, 50, 60],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Users',
          font: {
            size: 14,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: 'Months',
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Facebook Users Growth</h5>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default FacebookChart;
