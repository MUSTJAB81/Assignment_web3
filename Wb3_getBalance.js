const Web3 = require('web3')
const rpcURL = 'https://ropsten.infura.io/v3/61d8bf27c8c24d2a8d86b775efb7bab4';
const account='0x264495c23c6db0E7acB96b96a6004af8536D5A45';

const web3 = new Web3(rpcURL);




web3.eth.getBalance(account, (err, wei) => {
console.log("Balance in Wei",wei);
  balance = web3.utils.fromWei(wei, 'ether')
  console.log("Balance in Ether",balance);
})