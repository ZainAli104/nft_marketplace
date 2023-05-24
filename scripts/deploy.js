const hre = require('hardhat');

const main = async () => {
  const NFTMarketplace = await hre.ethers.getContractFactory('NFTMarketplace');
  const nftMarketplace = await NFTMarketplace.deploy();

  await nftMarketplace.deployed();

  console.log(`NFTMarketplace deployed to ${nftMarketplace.address}`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
