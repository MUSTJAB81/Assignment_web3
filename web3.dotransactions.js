const Web3 = require('web3')
const Tx= require("ethereumjs-tx").Transaction;
const rpcURL = "https://ropsten.infura.io/v3/61d8bf27c8c24d2a8d86b775efb7bab4";

const web3= new Web3(rpcURL);

const account1="0x264495c23c6db0E7acB96b96a6004af8536D5A45";
const account1_privatekey=Buffer.from("a511af31d1aa89409ac904fccecab6cfd68571141aae5a969734fb06e7d5fbd3",'hex');
const account2="0x53d455AE142049C8d6aB9e712a3d803f4caf503a";


web3.eth.getTransactionCount(account1, (err, txCount) => {
      console.log("nounce value",txCount);
      const txObject = {
        nonce:    web3.utils.toHex(txCount),
        to:       account2,
        value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
      }
      const tx = new Tx(txObject,{'chain':'ropsten'});

      tx.sign(account1_privatekey);
     

      const serialize = tx.serialize();
      const txHex = '0x' + serialize.toString('hex');
      web3.eth.sendSignedTransaction(txHex,(err,txHash) =>{
            if(!error){
                  console.log("Transaction Successfull",txHash);
            }
            else{
                  console.log(error);
            }

      })
    })