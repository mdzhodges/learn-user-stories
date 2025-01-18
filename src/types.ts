export type AccountType = {
    id: number,
    balance: number
    username: string,
}

export interface BankType {
    createAccount(username: string, age: number, accountNumber: number): AccountType
    deposit(account: AccountType, amount: number): AccountType
    withdraw(account: AccountType, amount: number): AccountType
    display(account: AccountType): AccountType
}