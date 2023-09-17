// src/components/SalesTable.js
import React from 'react';

const SalesTable = ({ salesData }) => {
  return (
    <div>
      <h2>Sales Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Product</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale, index) => (
            <tr key={index}>
              <td>{sale.date}</td>
              <td>{sale.product}</td>
              <td>{sale.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
