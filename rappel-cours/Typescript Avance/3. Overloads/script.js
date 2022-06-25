"use strict";
// Overloads => permet de mieux gérer ce que peut retourner une fonction
function combine(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
console.log(combine(10, 20)); // 30
console.log(combine("10", 20)); // "1020"
