const dotenv = require('dotenv').config();
const Provider = require("truffle-hdwallet-provider");
const Web3 = require('web3');
const { interface, bytecode } = require('../build/Auction');
const address = '0xE50321f5a2d0487b12E2cE96Bab7D466e7b622Cf';
const provider = new Provider(process.env.MNEMONIC, process.env.ROPSTEN_URL);
const web3 = new Web3(provider);

(async () => {
  const accounts = await web3.eth.getAccounts(),
    owner = accounts[0],
    biddingTime = 86400;

  console.log(`Deployed from account ${owner}`);

  const contract = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: `0x${bytecode}`,
      arguments: [biddingTime, owner]
    })
    .send({ from: accounts[0], gas: '1000000'});
  console.log(`Contract address: ${contract.options.address}`);
})();
