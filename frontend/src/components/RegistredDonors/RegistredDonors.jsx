import React from 'react';
import './RegistredDonors.css';

const RegistredDonors = ({ donors }) => {
  return (
    <div className="registered-donors">
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

export default RegistredDonors;
