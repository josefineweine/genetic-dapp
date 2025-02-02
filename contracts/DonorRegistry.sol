// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract DonorRegistry {
    struct Donor {
        string name;
        uint256 age;
        string bloodType;
        uint256 usageCount;
        bool isActive;
    }

    mapping(address => Donor) public donors;
    mapping(address => uint256) public usageLimits;

    event DonorRegistered(address indexed donorAddress, string name, uint256 age, string bloodType);
    event UsageUpdated(address indexed donorAddress, uint256 usageCount);

    // Register a new donor
    function registerDonor(string memory _name, uint256 _age, string memory _bloodType) public {
        donors[msg.sender] = Donor({
            name: _name,
            age: _age,
            bloodType: _bloodType,
            usageCount: 0,
            isActive: true
        });
        emit DonorRegistered(msg.sender, _name, _age, _bloodType);
    }

    // Track donor usage
    function updateUsage(uint256 _usageCount) public {
        require(donors[msg.sender].isActive, "Donor is not active.");
        donors[msg.sender].usageCount = _usageCount;
        emit UsageUpdated(msg.sender, _usageCount);
    }

    // Set usage limit for the donor
    function setUsageLimit(address _donor, uint256 _limit) public {
        usageLimits[_donor] = _limit;
    }

    // Fetch donor data
    function getDonorData() public view returns (string memory, uint256, string memory, uint256, bool) {
        Donor memory donor = donors[msg.sender];
        return (donor.name, donor.age, donor.bloodType, donor.usageCount, donor.isActive);
    }
}
