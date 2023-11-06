require("@nomiclabs/hardhat-waffle");
require('hardhat-abi-exporter');
require('dotenv').config({path: __dirname+'/.env'})
require("@nomiclabs/hardhat-etherscan");
require('hardhat-contract-sizer');
require('hardhat-gas-reporter');
require("dotenv").config({ path: ".env" });
require('solidity-coverage');
const ethers = require("ethers");

const QUICKNODE_HTTP_URL = process.env.Mainnet;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: {
    compilers: [{
      version: "0.8.20",
      settings: {
        optimizer: {
          enabled: true,
          runs: 1000,
        },
      },
    },
    {
      version: "0.8.9",
      settings: {
        optimizer: {
          enabled: true,
          runs: 1000,
        },
      },
    }]},

  networks: {
    hardhat: {
      chainId: 31337,
      gasPrice: "auto",
      forking: {
        url:QUICKNODE_HTTP_URL,   
      }
    }, 
    // goerli: {
    //   url:`https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API}`,
    //   accounts: [`0x${process.env.PRIVATE_KEY}`],
    // },
    // polygon: {
    //   url:``,
    //   accounts: [`0x${process.env.PRIVATE_KEY}`],
    // },
    mainnet: {
      url:QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
      gasPrice: "auto",
    },
  }
};
