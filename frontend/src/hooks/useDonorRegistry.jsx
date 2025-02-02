import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const contractABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "donorAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "age",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "bloodType",
        "type": "string"
      }
    ],
    "name": "DonorRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "donorAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "usageCount",
        "type": "uint256"
      }
    ],
    "name": "UsageUpdated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "donors",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "age",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "bloodType",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "usageCount",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getDonorData",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_age",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_bloodType",
        "type": "string"
      }
    ],
    "name": "registerDonor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_donor",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_limit",
        "type": "uint256"
      }
    ],
    "name": "setUsageLimit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_usageCount",
        "type": "uint256"
      }
    ],
    "name": "updateUsage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "usageLimits",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

const contractAddress = process.env.CONTRACT_ADDRESS || '0x0b54FAD894c1EFC7B190cE92D122F5E93704D04B';  // Fallback to hardcoded address

const useDonorRegistry = () => {
  const [contract, setContract] = useState(null);
  const [donorData, setDonorData] = useState(null);

  const loadProvider = async () => {
    if (window.ethereum) {
      try {
        // Log to check window.ethereum
        console.log(window.ethereum);  
        
        // Initialize the Web3Provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);  // Request account access
        const signer = provider.getSigner(); // Get signer (the user's wallet)

        // Initialize contract instance
        const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
        setContract(contractInstance); // Set contract instance
      } catch (error) {
        console.error("Error setting up Web3Provider:", error);
      }
    } else {
      alert("MetaMask is required!");
    }
  };

  const fetchDonorData = async () => {
    if (contract) {
      try {
        const data = await contract.getDonorData();
        setDonorData(data);
      } catch (error) {
        console.error("Error fetching donor data:", error);
      }
    }
  };

  useEffect(() => {
    loadProvider();  // Initialize contract connection
  }, []);

  useEffect(() => {
    if (contract) {
      fetchDonorData();  // Fetch data once the contract is loaded
    }
  }, [contract]);

  return { donorData };
};

export default useDonorRegistry;
