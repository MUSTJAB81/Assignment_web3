var Tx= require('ethereumjs-tx');
var Web3= require('web3');

const rpcUrl="https://ropsten.infura.io/v3/61d8bf27c8c24d2a8d86b775efb7bab4";

const web3 = new Web3(rpcUrl);

const account="0x264495c23c6db0E7acB96b96a6004af8536D5A45";
const privateKey="a511af31d1aa89409ac904fccecab6cfd68571141aae5a969734fb06e7d5fbd3";
const contractAddress="0x52b1055c29e273E9CB4FCC1F7C3338c2b47f149B"
const contractAbi=[
	{
		"inputs": [],
		"name": "age",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAge",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "setAge",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const contractMethodAsync = async() =>{
      try{
            const contract= new web3.eth.Contract(contractAbi, contractAddress);
            let getAge= await contract.methods.getAge().call();
            console.log("getAge",getAge);
      }
      catch(error){
            console.log("error",error)
      }
}
contractMethodAsync()