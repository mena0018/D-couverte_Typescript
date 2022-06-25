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
// Ici le type object est trop vaste
// const addRepairDate = (obj: object) => {
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
// const auto4 = addRepairDate2("TEST")
const auto5 = addRepairDate2({ model: "Ford", year: 2018, color: "white" });
