"use strict";
function multiply(num1, num2 = 10, action) {
    if (action)
        console.log(action);
    return num1 * num2;
}
// void => la fonction n'a pas de return != undefined
console.log(multiply(2, 34, "le resultat est : "));
let foo;
foo = () => { };
// Function signatures
let base;
base = (a, b) => a + b;
// Callback
function greetings(fn) {
    fn("Hello");
}
function printToConsole(msg) {
    console.log(msg);
}
greetings(printToConsole);
