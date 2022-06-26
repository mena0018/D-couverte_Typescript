
function multiply (num1 : number, num2 = 10, action?: string) {
    if (action) console.log(action)
    return num1 * num2;
}

// void => la fonction n'a pas de return != undefined

console.log(multiply(2, 34, "le resultat est : ")); 

let foo : Function;

foo = () => {}


// Function signatures
let base : (a: number, b:number) => number;
base = (a,b) => a + b;



// Callback
function greetings (fn: (a:string) => void) {
    fn("Hello");
}

function printToConsole (msg: string) {
    console.log(msg);
}

greetings(printToConsole)