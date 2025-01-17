

/**
 * This class represents the functions needed to modify a to-do list.
 */
export class BankAccountManager {

    private balance = 0;
    /**
     * Default constructor that initializes all the variables.
     */
    constructor() {}

    /**
     * This method adds an item to the to-do list.
     * @param amount - amount to add.
     */
    deposit(amount: number): void {
        this.balance += amount;
    }

    /**
     * This method removes an item from the to-do list. Returns 0 or 1 depending on if it is successful or not.
     * @param id    ID of the to-do list item to remove.
     */
    withdraw(amount: number): void {
        if((this.balance - amount) <= 0){
            this.balance = 0;
        } else{
            this.balance -= amount;
        }
    }

    /**
     * Lists the to-do list items in the console log.
     */
    displayBalance(): void {
        console.log(`Balance: ${this.balance}`);
    }
}