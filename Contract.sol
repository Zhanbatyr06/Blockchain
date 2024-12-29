// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EtherWallet {
    address public owner;

    // Конструктор для сохранения адреса владельца
    constructor() {
        owner = msg.sender;
    }

    // Функция для получения средств. Контракт автоматически получает Ether.
    receive() external payable {}

    // Функция для проверки баланса контракта
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // Функция для вывода всех средств владельцем контракта
    function withdrawAll() public {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }
}
