
// OR
const { Web3 } = require('web3'); // For CommonJS

const fs = require('fs');
const path = require('path');

// Connect to Ganache local network
const web3 = new Web3('http://127.0.0.1:7545');

// Read the compiled contract (ABI and bytecode)
const contractABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "recipient",
                "type": "address"
            }
        ],
        "name": "transferEther",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getContractBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
const bytecode = '0x6080604052348015600e575f80fd5b50603e80601a5f395ff3fe60806040525f80fdfea2646970667358221220a650ccba819b67eb602bb96ab2b9e3aa6e47608e6780f8d1284ab1aa5cd0ad1264736f6c63430008150033'; // Replace with actual bytecode

(async () => {
    const accounts = await web3.eth.getAccounts();
    const deployer = accounts[0];

    console.log('Deploying from account:', deployer);

    const contract = new web3.eth.Contract(contractABI);

    const deployedContract = await contract
        .deploy({ data: bytecode })
        .send({ from: deployer, gas: 3000000 });

    console.log('Contract deployed at:', deployedContract.options.address);
})();
(async () => {
    const contractAddress = '0xEC43247D1aD0D3fC039675542A1A3aD82AfEcAfB';
    const accounts = await web3.eth.getAccounts();
    const sender = accounts[0];
    const recipient = accounts[1];

    console.log('Contract deployed at:', contractAddress);

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // Transfer 1 Ether
    const amount = web3.utils.toWei('1', 'ether');
    await contract.methods
        .transferEther(recipient)
        .send({ from: sender, value: amount });

    console.log(`1 Ether transferred from ${sender} to ${recipient}`);
})();
