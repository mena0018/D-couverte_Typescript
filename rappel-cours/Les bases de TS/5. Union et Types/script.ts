// Unions
let code : string | number | boolean | object | Function;

code = "10";
code  = 10;
code = true;


// Tableau rempli de booléen ou de number
let arr : (boolean | number) []
arr = [true, false, 999];


const foo = (param: string | number) => console.log(param);
foo("hello");
foo(10);



// Types personnalisés - Alias
type mixedNumStr = string | number;
type booleanOrObject = boolean | object;

const base = (param: mixedNumStr | booleanOrObject) => console.log(param);

base("Type personnalisé");
base(true);
base(100);



// Type personnalisé
type element = {
    x: number;
    y: number;
    id: number | string;
    visible: boolean
}

const button : element = {
    x: 100,
    y: 120,
    id: 99,
    visible: true
}

console.log(button)