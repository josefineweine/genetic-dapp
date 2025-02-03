import { useState, useEffect } from "react";
import { ethers } from "ethers";
import DonorRegistryABI from "../contracts/DonorRegistry.json"; // Adjust path if needed

const CONTRACT_ADDRESS = "YOUR_SMART_CONTRACT_ADDRESS_HERE"; // Replace with your deployed contract address

const useDonorRegistry = () => {
  const [donorData, setDonorData] = useState(null);

  useEffect(() => {
    const fetchDonorData = async () => {
      if (!window.ethereum) {
        console.error("MetaMask is not installed.");
        return;
      }

      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, DonorRegistryABI, signer);

        const [name, age, bloodType, usageCount, isActive] = await contract.getDonorData();
        setDonorData({ name, age: age.toString(), bloodType, usageCount: usageCount.toString(), isActive });
      } catch (error) {
        console.error("Error fetching donor data:", error);
      }
    };

    fetchDonorData();
  }, []);

  return { donorData };
};

export default useDonorRegistry;
