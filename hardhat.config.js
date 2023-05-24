const fs = require('fs');
require('@nomicfoundation/hardhat-toolbox');

const privateKey = fs.readFileSync('.secret').toString().trim();
//  alchemy polygone mumbai testnet api key
const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;

module.exports = {
  solidity: '0.8.9',
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [privateKey],
    },
  },
};

// module.exports = {
//   networks: {
//     hardhat: {
//       chainId: 1337,
//     },
//   },
//   solidity: '0.8.9',
// };
