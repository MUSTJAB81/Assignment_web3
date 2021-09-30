const Web3 = require('web3')
const rpcURL = 'https://ropsten.infura.io/v3/61d8bf27c8c24d2a8d86b775efb7bab4';
const web3= new(rpcURL);
const ABI=[
	
];
const contractAddress="0x264495c23c6db0E7acB96b96a6004af8536D5A45";

const contract= new Web3.eth.contract(ABI,contractAddress);

contract.methods.retrieve().call((err,result) => {
      if(!err){
            console.log('Result from Contract',result);

      }
})