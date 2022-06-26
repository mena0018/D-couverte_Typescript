// Overloads => permet de mieux gérer ce que peut retourner une fonction

type NumberOrString = number | string;

function combine(a: number, b: number) : number 
function combine(a: string, b: string) : string 
function combine(a: number, b: string) : string 
function combine(a: string, b: number) : string 

function combine(a: NumberOrString, b: NumberOrString) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}


console.log(combine(10, 20))   // 30
console.log(combine("10", 20)) // "1020"