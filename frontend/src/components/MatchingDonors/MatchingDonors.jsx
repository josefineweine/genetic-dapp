import React from 'react';
import './MatchingDonors.css';

const MatchingDonors = ({ matchingDonors }) => {
  return (
    <div className="matching-donors">
      <h2>Matching Donors</h2>
      <ul>
        {matchingDonors.map((donor, index) => (
          <li key={index}>
            <p>{donor.name}</p>
            <p>Blood Type: {donor.bloodType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchingDonors;
