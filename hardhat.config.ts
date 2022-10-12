import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const mnemonic = process.env.MNEMONIC || "test test test test test test test test test test test junk";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    polygon: {
      accounts: {
        mnemonic: mnemonic
      },
      url: process.env.POLYGON_URL || "http://127.0.0.1"
    },
    mumbai: {
      accounts: {
        mnemonic: mnemonic
      },
      url: process.env.MUMBAI_URL || "http://127.0.0.1"
    },
  }
};

export default config;
