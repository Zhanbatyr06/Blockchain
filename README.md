# Smart Contract for Balance Management

This project is a simple smart contract for storing and managing Ether. The following features are implemented:
- Retrieving the contract balance.
- Withdrawing all funds by the owner.
- Receiving Ether.

## Usage

1. Ensure that Node.js and Ganache are installed.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Deploy the contract and Interact with the contract
    ```bash 
    node index.js
    ```
    
4. Interact with the contract:
    ```bash
    node interact.js
    ```

## Demonstration

https://postimg.cc/dhX9KhMn

## Examples

```javascript
// Checking the contract balance
const balance = await contract.methods.getBalance().call();
console.log('Balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
