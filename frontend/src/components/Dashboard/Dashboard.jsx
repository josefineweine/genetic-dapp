// src/components/Dashboard/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS } from '../../config/contract';  // Make sure this is where your contract address is stored

const Dashboard = () => {
  const [donorData, setDonorData] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const connectToMetaMask = async () => {
      if (window.ethereum) {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send("eth_requestAccounts", []); // Request account access
          const signer = provider.getSigner();
          const address = await signer.getAddress(); // Get user's wallet address
          setUserAddress(address);

          // Connect to contract
          const contract = new ethers.Contract(CONTRACT_ADDRESS, donorRegistryABI, signer);

          // Fetch donor data
          const data = await contract.getDonorData();
          setDonorData(data);
          setLoading(false);
        } catch (error) {
          console.error("Error connecting to MetaMask or contract:", error);
          setLoading(false);
        }
      } else {
        alert("MetaMask is required!");
        setLoading(false);
      }
    };

    connectToMetaMask();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {donorData ? (
        <>
          <p>Donor Name: {donorData.name}</p>
          <p>Age: {donorData.age}</p>
          <p>Blood Type: {donorData.bloodType}</p>
          <p>Usage Count: {donorData.usageCount}</p>
        </>
      ) : (
        <p>No donor data available.</p>
      )}
    </div>
  );
};

export default Dashboard;
