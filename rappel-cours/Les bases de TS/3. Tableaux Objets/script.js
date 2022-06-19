"use strict";
const fruits = ['fraise', 'pommes', 'poires', 'bananes'];
fruits.push("cerise");
const mixedArray = [1, 'string', [1, 2, 3]];
// mixedArray.push([1,2, "3"])
// Tableau rempli de nombres 
let numbers;
// Erreur car pour l'instant numbers est vide car il est sur undefined
// numbers.push(1)
numbers = [1, 2, 3];
// numbers =  [1, 2, "3"]
// Il aurait fallut l'instancier sur un tableau vide
let numbers2 = [];
numbers2.push(1);
// Tableau qui peut tout recevoir
let random;
// Ne pas faire ça car sinon ça sera pas forcément un tableau
let random2;
random2 = [1, 'string', [1, 2, 3]];
random2 = true;
// OBJETS 
const car = {
    name: "Audi",
    model: "A1",
    km: 60000,
};
let profile;
// profile = {
//     name: "John",
//     age: true
// }
let user = {
    name: "string",
    age: 34,
    favFood: ["pommes", "poires"],
    data: 50
};
let obj;
obj = { name: "Rabie" };
// obj = 10
