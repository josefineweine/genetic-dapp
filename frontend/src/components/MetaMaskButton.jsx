// In src/components/MetaMaskButton.jsx

import React from 'react';
import useDonorRegistry from '../hooks/useDonorRegistry'; // Correct import of the custom hook

const MetaMaskButton = () => {
  const { donorData } = useDonorRegistry(); // Use the custom hook here

  return (
    <div>
      <h2>MetaMask Button</h2>
      {donorData ? (
        <div>
          <p>Name: {donorData.name}</p>
          <p>Age: {donorData.age}</p>
          <p>Blood Type: {donorData.bloodType}</p>
        </div>
      ) : (
        <p>Loading donor data...</p>
      )}
    </div>
  );
};

export default MetaMaskButton;
