// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract RandomNumber {

  constructor() {}

  function random(uint256 max) external view returns (uint256) {
    return uint256(keccak256(abi.encodePacked(block.timestamp, block.prevrandao))) % max;
  }

}
