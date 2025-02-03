import { useState, useEffect } from "react";
import { ethers } from "ethers";
import DonorRegistryABI from "../contracts/DonorRegistry.json"; // Correct path
import { contractAddress } from "../config/contract"; // Ensure this file exists

const useDonorRegistry = () => {
  const [donorData, setDonorData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, DonorRegistryABI, provider);
        try {
          const data = await contract.getDonorData();
          setDonorData({
            name: data[0],
            age: data[1].toNumber(),
            bloodType: data[2],
            usageCount: data[3].toNumber(),
            isActive: data[4],
          });
        } catch (error) {
          console.error("Error fetching donor data:", error);
        }
      }
    };

    fetchData();
  }, []);

  return { donorData };
};

export default useDonorRegistry;
