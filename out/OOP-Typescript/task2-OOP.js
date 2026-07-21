"use strict";
class BankAccount {
    Balance;
    constructor(initialBalance) {
        this.Balance = initialBalance;
    }
    deposit(amount) {
        this.Balance += amount;
    }
    withdraw(amount) {
        this.Balance -= amount;
    }
    getBalance() {
        return this.Balance;
    }
}
const account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance());
//# sourceMappingURL=task2-OOP.js.map