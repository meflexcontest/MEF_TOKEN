const { expect } = require("chai");
const { ethers } = require("hardhat");
// const { ethers } = require("ethers");



describe("Meflex Token contract", function () {

  let mefToken;
  let Meflex;

  before(async () => {
    [deployer, per1, per2, per3, per4] = await ethers.getSigners()

    console.log("start");
    /////creating token /////////////

    Meflex = await ethers.getContractFactory("Meflex")


    mefToken = await Meflex.deploy();
    
    await mefToken.deployed();

    console.log("mefToken contract address", mefToken.address);

  });

  it("After Deploy check all balances contracts", async function () {
    expect(await mefToken.balanceOf("0x2e77e69C12338d49A10401c2a25cbDc4865e47d7")).to.equal(ethers.utils.parseEther("50000000"));
    expect(await mefToken.balanceOf("0x6ebE6d1847E93bD268A3Ed87C2797959A6818981")).to.equal(ethers.utils.parseEther("100000000"));
    expect(await mefToken.balanceOf("0x0e25054B76D6AFB6ed6c09A8Faf4A4588de414A6")).to.equal(ethers.utils.parseEther("50000000"));
    expect(await mefToken.balanceOf("0xF580a19F35EA46c29ED5cF2B279c181874f191b5")).to.equal(ethers.utils.parseEther("100000000"));
    expect(await mefToken.balanceOf("0x3274d073C3CAFfc62f448D57567A75798D563Cb5")).to.equal(ethers.utils.parseEther("500000000"));
    expect(await mefToken.balanceOf("0x7B98236DF1BcDe9C83A91E1573caf86B0fF8C67b")).to.equal(ethers.utils.parseEther("200000000"));
  });
  

});
