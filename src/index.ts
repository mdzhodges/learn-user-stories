import * as BankAccountManager from "./BankAccountManager";
import * as readline from "node:readline";
import {BankType} from './types'
import {AccountType} from "./types";


/**
 * This bank class implements The BankType interface
 * and stores the account and usernames
 * and provides allows to create a new account.
 */
export class Bank implements BankType{


    private accounts: AccountType[] = [];
    private usernames: string[] = [];

    /**
     *
     * @param accounts - lists
     * @param usernames
     */
    constructor(accounts: AccountType[], usernames: string[]) {
        this.accounts = accounts;
        this.usernames = usernames;
    }

    createAccount(username: string, age: number, accountNumber: number): AccountType {
        if(age < 18){
            throw new Error("Age under 18!")
        }
        if(this.usernames.includes(username)){
            throw new Error("Username already exists!")
        }
        if(this.accounts.find(account => account.id === accountNumber)){
            throw new Error("Account already exists!")
        }
        if(accountNumber.toString().length != 10){
            throw new Error("Improper account number length")
        }

        const newAccount: AccountType = {
            id: accountNumber,
            balance: 0
        }

        this.accounts.push(newAccount)

        return newAccount;
    }

    deposit(account: AccountType, amount: number): AccountType {
        return undefined;
    }

    display(account: AccountType): AccountType {
        return undefined;
    }

    withdraw(account: AccountType, amount: number): AccountType {
        return undefined;
    }

    protected rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });






}
