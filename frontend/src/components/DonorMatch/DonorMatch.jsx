import React from 'react';
import './DonorMatch.css';

const DonorMatch = ({ matchDonors }) => {
  return (
    <div className="donor-match">
      <h2>Match Donors</h2>
      <button onClick={matchDonors}>Find Matching Donors</button>
    </div>
  );
};

export default DonorMatch;
