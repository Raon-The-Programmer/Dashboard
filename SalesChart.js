// src/components/SalesChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const SalesChart = ({ data }) => {
  return (
    <div>
      <h2>Sales Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default SalesChart;
