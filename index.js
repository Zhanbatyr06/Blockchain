const Web3 = require('web3').default;

// Подключение к Infura
const web3 = new Web3('https://holesky.infura.io/v3/ff7f53c9b1cc47ef95d202adb3104306');

// Адрес контракта и ABI
const contractAddress = '0xf176ca0089da2069c87dc7db7c1661c70b4d70fe';
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getBalance",
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
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];

// Подключение контракта
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Проверка сети и наличия контракта
async function checkConnection() {
    try {
        const networkId = await web3.eth.net.getId();
        console.log('Подключенная сеть:', networkId);

        const code = await web3.eth.getCode(contractAddress);
        if (code === '0x') {
            console.error('Контракт не найден по адресу:', contractAddress);
            return false;
        } else {
            console.log('Контракт найден по адресу:', contractAddress);
            return true;
        }
    } catch (err) {
        console.error('Ошибка проверки сети или контракта:', err.message);
        return false;
    }
}

// Проверка баланса контракта
async function getContractBalance() {
    try {
        console.log('Доступные методы контракта:', contract.methods);
        const balance = await contract.methods.getBalance().call();
        console.log('Баланс контракта:', web3.utils.fromWei(balance, 'ether'), 'ETH');
    } catch (err) {
        console.error('Ошибка вызова метода getBalance:', err.message);
    }
}

// Основной скрипт
(async () => {
    try {
        const isConnected = await checkConnection();
        if (isConnected) {
            console.log('Проверка баланса контракта...');
            await getContractBalance();
        }
    } catch (error) {
        console.error('Ошибка:', error.message);
    }
})();
