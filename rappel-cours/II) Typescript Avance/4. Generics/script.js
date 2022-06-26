"use strict";
// Generics => paramètres réutilisable avec les interfaces et les fonctions
// Permet de choisir le type au moment de la création de l'objet. Possible de mettre n'importe quelle lettre
const Londres = {
    name: "Londre",
    population: 8000000,
    additionalData: {
        area: 1572
    }
};
const Paris = {
    name: "Paris",
    population: 2000000,
    additionalData: "Paris est la capitale de la France"
};
const Tokyo = {
    name: "Tokyo",
    population: 2000000,
    additionalData: [
        {
            area: 1572,
            pop: 5
        },
        {
            description: "Tokyo est la capitale du Japon"
        }
    ]
};
console.table([Tokyo, Paris, Londres]);
// Fonctions
// Ici le type object est trop vaste. On ne peut ni spécifier sa longueur, ni les types qu'il va contenir
// const addRepairDate = (obj: object) => {
// Donc on définit un Generics qui pour l'instant va accepter tous les types
const addRepairDate = (obj) => {
    const lastRepair = new Date();
    return Object.assign(Object.assign({}, obj), { lastRepair });
};
const auto = addRepairDate({ model: "Ford", year: 2018 });
console.log(auto.model);
// Un Generics accepte tous les types
const auto2 = addRepairDate({ model: "Ford", year: 2018, color: "white" });
// Même lorsque le paramètre n'est plus un objet..
const auto3 = addRepairDate("TEST");
// Pour restreindre le paramètre à un objet on peut utiliser extends
const addRepairDate2 = (obj) => {
    const lastRepair = new Date();
    return Object.assign(Object.assign({}, obj), { lastRepair });
};
const auto5 = addRepairDate2({ model: "Ford", year: 2018, color: "white" });
// const auto4 = addRepairDate2("TEST")
// Pour obliger à fournir un paramètre ayant la propriété length
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
// const str = consoleSize(4);
const str2 = consoleSize([1, 2, 3]);
// On peut également extraire un type à partir d'une constante.
// Déconseillé car si on change user le type change et peut engendre des erreurs si on a utiliser le type autre part.
const user = {
    firstname: "John",
    lastname: "Doe",
    age: 20
};
