"use strict";
let greet;
greet = () => {
    console.log("Hello, world!");
};
const add = (num1, num2, num3, num4 = 10) => {
    return num1 + num2;
};
console.log(add(5, 10, 3));
const minus = (a, b) => {
    return a - b;
};
let result = minus(5, 3);
console.log(result);
