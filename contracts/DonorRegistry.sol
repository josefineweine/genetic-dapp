// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract DonorRegistry {
    struct Donor {
        string name;
        uint256 age;
        string bloodType;
        uint256 usageCount;
        uint256 maxUsage;
        bool isActive;
        // Add other fields here as necessary
    }

    mapping(uint256 => Donor) public donors;
    uint256 public donorCount;

    event DonorRegistered(uint256 indexed donorId, string name, uint256 age, string bloodType);
    event DonorUsageUpdated(uint256 indexed donorId, uint256 usageCount);
    event DonorDeactivated(uint256 indexed donorId);

    function registerDonor(string memory _name, uint256 _age, string memory _bloodType) public {
        donorCount++;
        donors[donorCount] = Donor({
            name: _name,
            age: _age,
            bloodType: _bloodType,
            usageCount: 0,
            maxUsage: 3, // Example max usage
            isActive: true
        });
        emit DonorRegistered(donorCount, _name, _age, _bloodType);
    }

    function incrementDonorUsage(uint256 donorId) public {
        require(donorId > 0 && donorId <= donorCount, "Invalid donor ID");
        Donor storage donor = donors[donorId];
        require(donor.isActive, "Donor is not active");
        require(donor.usageCount < donor.maxUsage, "Maximum usage reached");

        donor.usageCount++;

        if (donor.usageCount >= donor.maxUsage) {
            donor.isActive = false;
            emit DonorDeactivated(donorId);
        }

        emit DonorUsageUpdated(donorId, donor.usageCount);
    }

    // Optionally, add getter functions for donor data as needed
}
