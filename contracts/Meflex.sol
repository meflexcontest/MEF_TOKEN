// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Meflex is ERC20, Ownable {
    constructor() ERC20("Meflex", "MEF") {
        _mint(0x2e77e69C12338d49A10401c2a25cbDc4865e47d7, 50_000_000 ether); // Pre-sales: 50 million tokens (5%)

        _mint(0x6ebE6d1847E93bD268A3Ed87C2797959A6818981, 100_000_000 ether); // Teams, Partners, and Advisors: 100 million tokens (10%)

        _mint(0x0e25054B76D6AFB6ed6c09A8Faf4A4588de414A6, 50_000_000 ether); // Private sales:: 50 million tokens (5%)

        _mint(0xF580a19F35EA46c29ED5cF2B279c181874f191b5, 100_000_000 ether); // Marketing: 100 million tokens (10%)

        _mint(0x3274d073C3CAFfc62f448D57567A75798D563Cb5, 500_000_000 ether); // Reward pool: 500 million tokens (50%)

        _mint(0x7B98236DF1BcDe9C83A91E1573caf86B0fF8C67b, 200_000_000 ether); // Ecosystem: 200 million tokens (20%)
    }

    function totalSupply() public pure override returns (uint256) {
        return 1000_000_000 ether;
    }
}
