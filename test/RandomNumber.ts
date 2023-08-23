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

  describe("Deployment", function () {
    it("Test 1", async function () {
      const { randomNumberContract } = await loadFixture(deployAndInitFixture);

      //TODO: add logic
    });

  });

});
