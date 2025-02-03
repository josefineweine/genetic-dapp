import DonorRegistryABI from "../contracts/DonorRegistry.json";

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS; // Load from .env

const donorRegistryConfig = {
  address: CONTRACT_ADDRESS,
  abi: DonorRegistryABI.abi, // Load ABI from JSON
};

export default donorRegistryConfig;
