const { ethers } = require("hardhat");

async function main() {
    console.log("Deploying DonorRegistry contract...");

    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Get the contract factory
    const DonorRegistry = await ethers.getContractFactory("DonorRegistry");

    // Deploy the contract
    const donorRegistry = await DonorRegistry.deploy();
    await donorRegistry.deployed();

    console.log("DonorRegistry contract deployed to:", donorRegistry.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
