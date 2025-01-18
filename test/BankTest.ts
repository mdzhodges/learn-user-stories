import {Bank} from '../src/Bank';
import {BankType, AccountType} from "../src/types";


const accounts: AccountType[] = [{id: 1234567895, balance: 3448, username: "user1"},
    {id: 1234567891, balance: 3448, username: "user2"},
    {id: 1234567892, balance: 3448, username: "user3"}]


const usernames = ['user2', 'user3'];

const bank = new Bank(accounts, usernames);

/**
 * User Story #1 Scenario 1 Tests - Tests for invalid account number
 */

//This test assures an invalid account number fails.
try {
    const acc = bank.createAccount('user4', 23, 1234567891)
    console.log("User Story 1 Scenario 1 failed")
} catch (err) {
    console.error("User Story 1 Scenario 1 passed")
}

//This test assures a valid account number passes.
try {
    const acc = bank.createAccount('user4', 23, 1292939495)
    console.log("User Story 1 Scenario 1 passed")
} catch (err) {
    console.error("User Story 1 Scenario 1 failed")
}


/**
 * User Story #1 Scenario 2 Tests - Tests for invalid age
 */
// This test assures that an invalid age fails
try {
    const acc1 = bank.createAccount('15', 17, 2345678912)
    console.log("User Story 1 Scenario 2 failed")
} catch (e) {
    console.log("User Story 1 Scenario 2 passed")
}

// This tests assures that a valid age passes
try {
    const acc1 = bank.createAccount('1', 19, 2345678915)
    console.log("User Story 1 Scenario 2 passed")
} catch (e) {
    console.log("User Story 1 Scenario 2 failed")
}

/**
 * User Story #1 Scenario 3 Tests - Tests for invalid username
 */
// This test assures that an invalid username fails
try {
    const acc1 = bank.createAccount('user2', 19, 2345678915)
    console.log("User Story 1 Scenario 3 failed")
} catch (e) {
    console.log("User Story 1 Scenario 3 passed")
}

// This tests assures that a valid username passes
try {
    const acc1 = bank.createAccount('unique', 19, 5064999999)
    console.log("User Story 1 Scenario 3 passed")
} catch (e) {
    console.log("User Story 1 Scenario 3 failed")
}


/**
 * Beginning of Deposit User Story #2;
 */

// This test assures that a valid input works for a deposit
try {
    const acc1 = bank.deposit(accounts[0], 10);
    if (acc1.balance === 3448 + 10) {
        console.log("User Story 2 Scenario 1 passed")
    } else {
        console.log("User Story 2 Scenario 1 failed")

    }
} catch (e) {
    console.log("User Story 2 Scenario 1 failed")
}

// This test assure that an invalid account number fails
try {
    const acc1 = bank.deposit({id: 1234356789875643, balance: 0, username: '1'}, 10);
    console.log("User Story 2 Scenario 2 failed")
} catch (e) {
    console.log("User Story 2 Scenario 2 passed")
}

// This test assures that an invalid deposit amount fails
try {
    const acc1 = bank.deposit(accounts[0], -10);
    console.log("User Story 2 Scenario 3 failed")
} catch (e) {
    console.log("User Story 2 Scenario 3 passed")
}

// This test assures that a two invalid inputs fails
try {
    const acc1 = bank.deposit({id: 1234356789875643, balance: 0, username: '1'}, -10);
    console.log("User Story 2 Scenario 4 failed")
} catch (e) {
    console.log("User Story 2 Scenario 4 passed")
}

/**
 * Beginning of Withdraw User Story #3;
 */

// This test assures that a valid input works for a wtihdraw
try {
    const acc1 = bank.withdraw(accounts[0], 10);
    if (acc1.balance === 3448) {
        console.log("User Story 3 Scenario 1 passed")
    } else {
        console.log("User Story 3 Scenario 1 failed")

    }
} catch (e) {
    console.log("User Story 3 Scenario 1 failed")
}

// This test assure that an invalid account number fails
try {
    const acc1 = bank.withdraw({id: 1234356789875643, balance: 0, username: '1'}, 10);
    console.log("User Story 3 Scenario 2 failed")
} catch (e) {
    console.log("User Story 3 Scenario 2 passed")
}

// These tests assure that an invalid withdraw amount fails
try {
    const acc1 = bank.withdraw(accounts[0], -10);
    console.log("User Story 3 Scenario 3 failed")
} catch (e) {
    console.log("User Story 3 Scenario 3 passed")
}

// These tests assure that an invalid withdraw amount fails
try {
    const acc1 = bank.withdraw(accounts[0], 100000000000);
    console.log("User Story 3 Scenario 3 failed")
} catch (e) {
    console.log("User Story 3 Scenario 3 passed")
}

// This test assures that a two invalid inputs fails
try {
    const acc1 = bank.withdraw({id: 1234356789875643, balance: 0, username: '1'}, -10);
    console.log("User Story 3 Scenario 4 failed")
} catch (e) {
    console.log("User Story 3 Scenario 4 passed")
}


/**
 * Beginning of Check Balance User Story #4;
 */

// This test assures that a valid account number shows the balance
try {
    const acc1 = bank.display(accounts[0]);
    console.log("User Story 4 Scenario 1 passed")
} catch (e) {
    console.log("User Story 4 Scenario 1 failed")
}

// This test assures that an invalid account number does not show the balance
try {
    const acc1 = bank.display({id: 1234356789875643, balance: 0, username: '1'});
    console.log("User Story 4 Scenario 2 failed")

} catch (e) {
    console.log("User Story 4 Scenario 2 passed")
}


/**
 * Beginning of Login User Story #5;
 */

// this test assures that two valid inputs logs in the user.
try {
    const acc1 = bank.login(accounts[0].username, accounts[0].id);
    console.log("User Story 5 Scenario 1 passed")
} catch (e) {
    console.log("User Story 5 Scenario 1 failed")
}

// This test assures that an invalid username does not log in in the user
try {
    const acc1 = bank.login("mdhodges", accounts[0].id);
    console.log("User Story 5 Scenario 2 failed")

} catch (e) {
    console.log("User Story 5 Scenario 2 passed")


// This test assures that an invalid account number does not log in in the user
    try {
        const acc1 = bank.login(accounts[0].username, 1234);
        console.log("User Story 5 Scenario 3 failed")

    } catch (e) {
        console.log("User Story 5 Scenario 3 passed")
    }
}

process.exit(0);