import React, { useState } from "react";
import useDonorRegistry from "../../hooks/useDonorRegistry.js";

const MetaMaskButton = ({ onConnect, loading }) => {
  const { donorData } = useDonorRegistry(); // Fetch donor data

  return (
    <div>
      <button onClick={onConnect} disabled={loading}>
        {loading ? "Connecting..." : "Connect Wallet"}
      </button>

      {donorData ? (
        <div>
          <h2>Donor Information</h2>
          <p><strong>Name:</strong> {donorData.name}</p>
          <p><strong>Age:</strong> {donorData.age}</p>
          <p><strong>Blood Type:</strong> {donorData.bloodType}</p>
        </div>
      ) : (
        <p>Loading donor data...</p>
      )}
    </div>
  );
};

export default MetaMaskButton;
