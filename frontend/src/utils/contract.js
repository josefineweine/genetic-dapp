// utils/contract.js
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS } from '../config/contract'; // Assuming this file contains the contract address
import donorRegistryABI from '../contracts/DonorRegistry.cjs'; // Import ABI from the .cjs file

export const connectToContract = async () => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []); // Request account access

    const signer = provider.getSigner(); // Get signer (the user's wallet)
    const contract = new ethers.Contract(CONTRACT_ADDRESS, donorRegistryABI, signer); // Use imported ABI and contract address
    return contract;
  } else {
    alert("MetaMask is required!");
    return null;
  }
};
