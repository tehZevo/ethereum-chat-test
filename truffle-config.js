var HDWalletProvider = require("@truffle/hdwallet-provider");
var secret = require("./secret.json");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(secret.ropstenMnemonic, `https://ropsten.infura.io/v3/${secret.infuraKey}`)
      },
      network_id: 3,
      gas: 4000000
    }
  }
};
