"use strict";
function add(num1, num2) {
    return num1 + num2;
}
add(5, 5);
const poorUser = {
    name: "Halima",
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    },
};
const array = [1, 2, 3];
const newArray = array.map((item) => item * item);
