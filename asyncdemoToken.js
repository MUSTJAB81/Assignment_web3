var Tx= require('ethereumjs-tx');
var Web3= require('web3');

const rpcUrl="https://ropsten.infura.io/v3/61d8bf27c8c24d2a8d86b775efb7bab4";

const web3 = new Web3(rpcUrl);

const account="0x264495c23c6db0E7acB96b96a6004af8536D5A45";
const privateKey="a511af31d1aa89409ac904fccecab6cfd68571141aae5a969734fb06e7d5fbd3";

const byteCode="608060405234801561001057600080fd5b5061019c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063262a9dff14610046578063967e6e6514610064578063d5dcf12714610082575b600080fd5b61004e6100b2565b60405161005b9190610125565b60405180910390f35b61006c6100b8565b6040516100799190610125565b60405180910390f35b61009c600480360381019061009791906100e9565b6100c1565b6040516100a99190610125565b60405180910390f35b60005481565b60008054905090565b6000816000819055506000549050919050565b6000813590506100e38161014f565b92915050565b6000602082840312156100ff576100fe61014a565b5b600061010d848285016100d4565b91505092915050565b61011f81610140565b82525050565b600060208201905061013a6000830184610116565b92915050565b6000819050919050565b600080fd5b61015881610140565b811461016357600080fd5b5056fea2646970667358221220cde53ef54470e83466d381dbaebd3c4247d24148fa1a7636a9a5ea2d4c1ffb0b64736f6c63430008070033";

const byteCodeBuffer= Buffer.from(byteCode,'hex');
const privateKeyBuffer= Buffer.from(privateKey,'hex');

const contractDeployAsync= async() =>{
      try{
            const txCount= await web3.eth.getTransactionCount(account)
            const txObj={
                  nonce: web3.utils.toHex(txCount),
                  data:byteCodeBuffer,
                  gasLimit: web3.utils.toHex(2100000),
                  gasPrice: web3.utils.toHex(web3.utils.toWei('10','gwei'))

            }
            const tx= new Tx.Transaction(txObj,{chain:"ropsten",hardfork:"petersburg"});
            tx.sign(privateKeyBuffer);
            const serializedTx= tx.serialize();
            const raw = '0x' + serializedTx.toString('hex');
            let signedTransaction = await web3.eth.sendSignedTransaction(raw)

            console.log("signedTransaction",signedTransaction);
      }
      
      catch(error){

      }
}
contractDeployAsync()