const hre = require("hardhat");

async function main() {
    console.log("Deploying DonorRegistry contract...");

    const DonorRegistry = await hre.ethers.getContractFactory("DonorRegistry");
    const donorRegistry = await DonorRegistry.deploy();

    await donorRegistry.deployed();

    console.log("DonorRegistry contract deployed to:", donorRegistry.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
