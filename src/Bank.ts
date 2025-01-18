import {BankType} from './types'
import {AccountType} from "./types";


/**
 * This bank class implements The BankType interface
 * and stores the account and usernames
 * and provides allows to create a new account.
 */
export class Bank implements BankType {


    private accounts: AccountType[] = [];
    private usernames: string[] = [];

    /**
     * The constructor initialized the bank with accounts and usernames
     * @param accounts - array of accounts
     * @param usernames - array of usernames
     */
    constructor(accounts: AccountType[], usernames: string[]) {
        this.accounts = accounts;
        this.usernames = usernames;
    }

    /**
     * This method allows the user to create an account, the account is then stored
     * in the array of accounts.
     * @param username - the username the user wants to use.
     * @param age - the age of the user.
     * @param accountNumber - the 10-digit account number of the user.
     * @returns a new account with a ten-digit unique id and zero balance.
     */
    createAccount(username: string, age: number, accountNumber: number): AccountType {
        if (age < 18) {
            throw new Error("Age under 18!")
        }
        if (this.usernames.includes(username)) {
            throw new Error("Username already exists!")
        }
        if (this.accounts.find(account => account.id === accountNumber)) {
            throw new Error("Account already exists!")
        }
        if (accountNumber.toString().length != 10) {
            throw new Error("Improper account number length")
        }

        const newAccount: AccountType = {
            id: accountNumber,
            balance: 0,
            username: username
        }

        this.accounts.push(newAccount)
        this.usernames.push(username)

        return newAccount;
    }

    /**
     * This method deposits money into a users account.
     * @param account - the account the amount should be added to.
     * @param amount - the amount to add.
     * @returns - the updated account with the updated balance.
     */
    deposit(account: AccountType, amount: number): AccountType {
        if (this.accounts.find(accountSearch => accountSearch.id === account.id)) {
            if (amount > 0) {
                this.accounts.find(accountSearch => accountSearch.id === account.id).balance += amount
                return this.accounts.find(accountSearch => accountSearch.id === account.id);
            }
            throw new Error("Invalid deposit amount!")
        }
        throw new Error("Account does not exist!")
    }

    /**
     * Withdraws money from a user account.
     * @param account - the account the amount should withdraw to.
     * @param amount - the amount to withdraw.
     * @returns - the updated account with the updated balance.
     */
    withdraw(account: AccountType, amount: number): AccountType {
        if (this.accounts.find(accountSearch => accountSearch.id === account.id)) {
            if (amount <= this.accounts.find(accountSearch => accountSearch.id === account.id).balance
                && amount > 0) {
                this.accounts.find(accountSearch => accountSearch.id === account.id).balance -= amount
                return this.accounts.find(accountSearch => accountSearch.id === account.id);
            }
            throw new Error("Invalid withdraw amount!")
        }
        throw new Error("Account does not exist!")
    }

    /**
     * Displays account balance in the console.
     * @param account - the account that has it's balance displayed.
     * @returns - input account
     */
    display(account: AccountType): AccountType {
        if (this.accounts.find(accountSearch => accountSearch.id === account.id)) {
            console.log("Balance: ", this.accounts.find(accountSearch => accountSearch.id === account.id).balance)
            return this.accounts.find(accountSearch => accountSearch.id === account.id);
        }
        throw new Error("Account does not exist!")
    }

    /**
     * Allows a user to log in to an existing account.
     * @param username - username of the user.
     * @param accountNumber - account number of the user.
     */
    login(username: string, accountNumber: number) {

        if (this.accounts.find(accountSearch => accountSearch.id === accountNumber).username === username) {
            console.log("Logged In")
            this.display(this.accounts.find(accountSearch => accountSearch.id === accountNumber))
            return this.accounts.find(accountSearch => accountSearch.id === accountNumber);
        }

        throw new Error("Invalid username or account number!")

    }
}
