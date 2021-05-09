
const HDWalletProvider = require("@truffle/hdwallet-provider");
const infuraKey = "ea519b8bdcb548da8d67e289ee6e4b47";

const mnemonic = "example corn decorate resource infant play boost file narrow mosquito ramp piano";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },      // rinkeby has a lower block limit than mainnet     
  },
  compilers: {
    solc: { 
      version: "^0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};