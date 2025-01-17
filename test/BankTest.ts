import { Bank } from '../src/index';
import {BankType, AccountType} from "../src/types";

// setup

const accounts: AccountType[] =[{id: 1234567895, balance: 3448},
    {id: 1234567891, balance: 3448},
    {id: 1234567892, balance: 3448},
    {id: 1234567893, balance: 3448},
    {id: 1234567890, balance: 3448},
    {id: 1234567894, balance: 3448}]

const usernames = ['user2', 'user3'];

const bank = new Bank(accounts, usernames);

const acc = bank.createAccount('user1', 19, 2345678901)

//Scenario 1 Tests
if(acc.id !== 2345678901 || acc.balance !==0 || acc.id.toString() !== acc.id.toString()) {
    console.log("Scenario 1 failed")
} else{
    console.log("Scenario 1 Passed")
}


// Scenario 2 Tests
try{
    const acc1 = bank.createAccount('15', 17, 2345678912)
    console.log("Scenario 2 failed")
}
catch (e){
    console.log("Scenario 2 passed")
}

try{
    const acc1 = bank.createAccount('1', 19, 2345678915)
    console.log("Scenario 2 passed")
}
catch (e){
    console.log("Scenario 2 failed")
}


process.exit(0);