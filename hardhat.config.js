/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-waffle");
require("@eth-optimism/hardhat-ovm");

module.exports = {
  networks: {
    hardhat: {
      gasPrice: 1000000000,
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [process.env.DEV_PRIVATE_KEY],
      chainId: 0x2a,
      gas: 4700000,
    },
    sokul: {
      url: "https://sokol.poa.network",
      accounts: [process.env.DEV_PRIVATE_KEY],
      chainId: 77,
      gasPrice: 1000000000,
    },
    xdai: {
      url: "https://xdai.poanetwork.dev",
      accounts: [process.env.DEV_PRIVATE_KEY],
      network_id: 100,
      gasPrice: 1000000000,
    },
    arbitrumRinkeby: {
      url: "https://rinkeby.arbitrum.io/rpc",
      accounts: [process.env.DEV_PRIVATE_KEY],
      gasPrice: 0,
    },
    optimisticKovan: {
      url: "https://kovan.optimism.io",
      accounts: [process.env.DEV_PRIVATE_KEY],
      gasPrice: 15000000,
      ovm: true, // This sets the network as using the ovm and ensure contract will be compiled against that.
    },
  },
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  ovm: {
    solcVersion: "0.6.12",
  },
};