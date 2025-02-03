// src/config/contract.js
export const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
export const contractABI = (await import("../contracts/DonorRegistry.json")).DonorRegistryABI;
