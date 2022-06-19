"use strict";
console.log('here');
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let level;
level = 1;
level = 'a';
function render(document) {
    console.log(document);
}
let user = [1, 'Mosh'];
let mySize = 1;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2023);
let employee = {
    id: 1,
    name: 'Kai',
    retire: (date) => {
        console.log('retire', date);
    }
};
let newEmployee = {
    id: 1,
    name: 'Kai',
    retire: (date) => {
        console.log('retire', date);
    }
};
function kgToLbs(weight) {
    if (typeof weight == 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs('10');
kgToLbs(20);
//# sourceMappingURL=index.js.map