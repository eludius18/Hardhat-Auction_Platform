// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const Auction  = await ethers.getContractFactory("Auction");
  var duration_minutes = 3;
  var starting_bid = 3;
  const auction = await Auction.deploy(duration_minutes, starting_bid);  // <——— Must also have 0 arguments

  await auction.deployed();

  console.log(`Auction deployed to: ${auction.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });