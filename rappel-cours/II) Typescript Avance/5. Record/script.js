"use strict";
// Record <key, value> => Permet de définir le type d'un objet
// key: le type des clés de ton objet
// value: le type des valeurs de ton objet
const rocket = {
    name: "falcon",
    model: "xwing",
};
const list = {
    0: "Javascript",
    1: "CSS",
    // name: "PHP", // Incorrecte car la clé n'est pas de type number
};
const advanced = {
    name: "Javascript",
    1: "CSS",
    // 2: boolean // Incorecte car la valeur n'est pas de type string ou number
};
