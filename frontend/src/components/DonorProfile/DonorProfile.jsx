import React, { useState, useEffect } from 'react';
import { connectToContract } from '../utils/contract'; // Import contract connection logic

const DonorProfile = () => {
  const [donorData, setDonorData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDonorData = async () => {
    setIsLoading(true);
    const contract = await connectToContract();
    
    if (contract) {
      try {
        const data = await contract.getDonorData(); // Fetch data from contract
        setDonorData(data);
      } catch (error) {
        console.error("Error fetching donor data:", error);
        alert('Failed to fetch donor data.');
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDonorData();
  }, []);  // Fetch data once on mount

  return (
    <div className="donor-profile">
      <h2>Donor Profile</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : donorData ? (
        <div>
          <p>Name: {donorData[0]}</p>
          <p>Age: {donorData[1]}</p>
          <p>Blood Type: {donorData[2]}</p>
          <p>Usage Count: {donorData[3]}</p>
          <p>Status: {donorData[4] ? "Active" : "Inactive"}</p>
        </div>
      ) : (
        <p>No donor data found</p>
      )}
    </div>
  );
};

export default DonorProfile;
