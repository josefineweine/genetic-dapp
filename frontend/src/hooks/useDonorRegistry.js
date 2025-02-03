// src/hooks/useDonorRegistry.js
import { useState, useEffect } from "react";
import { ethers } from "ethers"; // Ensure correct import
import { CONTRACT_ADDRESS, DonorRegistryABI } from "../contracts/DonorRegistry.json"; // Correct import

export const useDonorRegistry = () => {
  const [donorData, setDonorData] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window.ethereum !== "undefined") {
        try {
          setLoading(true);
          setError(null); // Clear previous errors

          // Request user accounts from MetaMask
          await window.ethereum.request({ method: "eth_requestAccounts" });

          // Initialize ethers provider and signer
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner(); // Get the signer (user's wallet)
          
          // Create contract instance
          const contract = new ethers.Contract(CONTRACT_ADDRESS, DonorRegistryABI, signer);

          // Fetch donor data from the contract
          const data = await contract.getDonorData();
          
          setDonorData({
            name: data[0],
            age: data[1].toNumber(),
            bloodType: data[2],
            usageCount: data[3].toNumber(),
            isActive: data[4],
          });

          setIsConnected(true);
        } catch (err) {
          console.error("Error with Ethereum provider:", err);
          setError("Failed to fetch donor data. Please try again later.");
        } finally {
          setLoading(false);
        }
      } else {
        setError("MetaMask is not installed. Please install MetaMask.");
      }
    };

    fetchData();

    // Optional: Listen for account or network changes
    const handleAccountsChanged = () => {
      setDonorData(null); // Clear donor data on account change
      setIsConnected(false);
      fetchData(); // Re-fetch data
    };

    const handleChainChanged = () => {
      window.location.reload(); // Reload the page to ensure the network is updated
    };

    // Subscribe to account and network change events
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", handleChainChanged);
    }

    // Cleanup listeners when the component unmounts
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
        window.ethereum.removeListener("chainChanged", handleChainChanged);
      }
    };
  }, []); // Fetch data only once when the component mounts

  return { donorData, isConnected, loading, error };
};
export default useDonorRegistry;
