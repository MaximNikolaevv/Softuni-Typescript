class BankAccount {

    Balance: number;


    constructor(initialBalance: number) {
        this.Balance = initialBalance;
    }


    deposit(amount: number) {

        this.Balance += amount;
    }


    withdraw(amount: number) {

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