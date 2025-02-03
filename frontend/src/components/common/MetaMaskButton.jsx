import React, { useState } from "react";
import useDonorRegistry from "../../hooks/useDonorRegistry"; // Ensure correct path

const MetaMaskButton = () => {
  const { donorData } = useDonorRegistry();
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <button disabled={loading}>
        {loading ? "Connecting..." : "Connect Wallet"}
      </button>
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
