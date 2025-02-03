const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
    const contractAddress = process.env.CONTRACT_ADDRESS; // Use the env variable
    const donorRegistryArtifact = require('../artifacts/contracts/DonorRegistry.sol/DonorRegistry.json');

    // Set up provider and wallet
    const provider = new ethers.providers.JsonRpcProvider(process.env.API_URL);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    // Connect to the contract
    const donorRegistry = new ethers.Contract(contractAddress, donorRegistryArtifact.abi, wallet);

    try {
        // Fetch donor data (for the sender's address)
        const donorData = await donorRegistry.getDonorData();
        console.log("Donor data:", donorData);
    } catch (error) {
        console.error("Error calling getDonorData:", error);
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
