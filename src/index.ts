import {Bank} from '../src/Bank';
import * as readline from "node:readline";
import {AccountType} from "./types";

class Main {

    private Bank: Bank = new Bank([], []);
    private current: AccountType | undefined;

    private read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    constructor() {
    }

    async run() {
        console.log("Banking App");
        await this.parseCommand(await this.promptCommand());
        this.read.close();
    }

    /**
     * Private function that prompts the user for commands.
     * @private
     */
    private async promptCommand(): Promise<string> {
        return new Promise(command => {
            this.read.question("Enter command: ", command);
        });
    }

    private async parseCommand(command: string): Promise<void> {

        switch (command.toLowerCase()) {
            case "deposit": {
                if (this.current) {
                    this.Bank.deposit(this.current, await this.getAmount());
                } else {
                    console.log("No account is logged in.");
                }
                break;
            }
            case "display": {
                if (this.current) {
                    console.log("Current Account is: ", this.current.id);
                    this.Bank.display(this.current);
                } else {
                    console.log("No account is logged in.");
                }
                break;
            }
            case "withdraw": {
                if (this.current) {
                    this.Bank.withdraw(this.current, await this.getAmount());
                } else {
                    console.log("No account is logged in.");
                }
                break;
            }
            case "create": {
                let username = await this.getUsername();
                let age = await this.getAge();
                let accountNumber = await this.getAccountNumber();
                this.current = this.Bank.createAccount(username, age, accountNumber);
                break;
            }
            case "login": {
                let username = await this.getUsername();
                let accountNumber = await this.getAccountNumber();
                this.current = this.Bank.login(username, accountNumber);
                break;
            }
            case "logout": {
                this.current = undefined;
                console.log("Logged out successfully.");
                break;
            }
            case "exit": {
                process.exit(0);
            }
            default: {
                console.log("Unknown command.");
            }


        }
        await this.parseCommand(await this.promptCommand());

    }

    private async getAccountNumber(): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            this.read.question("Enter account number: ", (account: string) => {
                const parsedAccountNumber = parseInt(account);
                if (isNaN(parsedAccountNumber)) {
                    reject(new Error("Invalid account number"));
                } else {
                    resolve(parsedAccountNumber);
                }
            });
        });
    }

    private async getAge(): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            this.read.question("Enter age: ", (age: string) => {
                const parsedAge = parseInt(age);
                if (isNaN(parsedAge)) {
                    reject(new Error("Invalid age"));
                } else {
                    resolve(parsedAge);
                }
            });
        });
    }

    private async getUsername(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.read.question("Enter username: ", (username: string) => {
                if (username.trim() === "") {
                    reject(new Error("Username cannot be empty"));
                } else {
                    resolve(username);
                }
            });
        });
    }

    private async getAmount(): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            this.read.question("Enter amount: ", (amount: string) => {
                const parsedAmount = parseFloat(amount);
                if (isNaN(parsedAmount) || parsedAmount <= 0) {
                    reject(new Error("Invalid amount. Please enter a positive number."));
                } else {
                    resolve(parsedAmount);
                }
            });
        });
    }
}

new Main().run();
