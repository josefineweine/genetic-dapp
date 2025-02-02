import React, { useState, useEffect } from 'react';
import './DonorList.css';

const DonorList = ({ donors }) => {
  return (
    <div className="donor-list">
      <h2>Registered Donors</h2>
      <ul>
        {donors.map((donor, index) => (
          <li key={index}>
            <p>{donor.name}</p>
            <p>Blood Type: {donor.bloodType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonorList;
