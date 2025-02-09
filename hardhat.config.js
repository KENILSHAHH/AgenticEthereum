/** @format */

import '@nomicfoundation/hardhat-toolbox';
import '@nomiclabs/hardhat-ethers';
import * as dotenv from 'dotenv';
dotenv.config();
export default {
  solidity: '0.8.26',
  networks: {
    holesky: {
      url: 'https://ethereum-holesky-rpc.publicnode.com', // Replace with correct RPC URL if necessary
      accounts: [process.env.PRIVATE_KEY], // Ensure your private key is loaded
      chainId: 17000, // Holesky chain ID
    },
  },
};