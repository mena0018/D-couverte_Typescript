"use strict";
// Tuple : tableau avec longueur défini et un type défini pour chaque élément du tableau
// example sera un tableau d'exactement 2 éléments avec un booléen et un nombre
let example;
example = [true, 42];
// Défaut => méthode push
example.push(4);
// Enum
// const roles = {
//     javascript : 1,
//     css: 2,
//     react: 3
// }
// Fait la même chose mais en commençant par 0
var roles;
(function (roles) {
    roles[roles["javascript"] = 0] = "javascript";
    roles[roles["css"] = 1] = "css";
    roles[roles["react"] = 2] = "react";
})(roles || (roles = {}));
// Fait la même chose mais en commençant par 1
var roles2;
(function (roles2) {
    roles2[roles2["javascript"] = 1] = "javascript";
    roles2[roles2["css"] = 2] = "css";
    roles2[roles2["react"] = 3] = "react";
})(roles2 || (roles2 = {}));
