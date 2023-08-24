import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("RandomNumber", function () {

  async function deployAndInitFixture() {

    const [owner, otherAccount] = await ethers.getSigners();

    const RandomNumber = await ethers.getContractFactory("RandomNumber");
    const randomNumberContract = await RandomNumber.deploy();

    return { randomNumberContract, owner, otherAccount };
  }

  describe("Random numbers generation", function () {

    it("Simple random numbers generation", async function () {
      const { randomNumberContract } = await loadFixture(deployAndInitFixture);

      for (let i = 0; i < 15; i++) {
        let rand = await randomNumberContract.random(ethers.parseEther("100.00"));
        await time.increase(30);
        console.log(rand);
      }
    });

  });

});
