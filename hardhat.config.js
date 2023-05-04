/* @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
const dotenv = require("dotenv");
// const { SEPOLIA_URL, PRIVATE_KEY } = process.env;
dotenv.config({ path: "C:/Users/Lamprostech/Desktop/hardhat_prac/.env" });

// console.log(process.env.SEPOLIA_URL);

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
