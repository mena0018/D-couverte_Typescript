"use strict";
// L'opérateur : ! => renvoie jamais null
// Ne renverra jamais null
const container = document.querySelector(".container");
const user1 = {
    title: "Developpeur",
    description: "Développeur web",
    salary: 40000,
};
// Optional paramter
function message(msg) {
    if (msg) {
        console.log(msg);
    }
    else {
        console.log("No msg provided");
    }
}
message("Hey");
message();
const house1 = {
    rooms: 4,
    price: 100000,
    // garage: 1,
};
// L'opérateur : ?? => affiche data (même lorsque data est une valeur falsy) à l'exception de null ou undefined
const data = 0;
const display = data || "No data";
const display2 = data !== null && data !== void 0 ? data : "No data";
console.log("||", display, "?? : ", display2);
// Never => Spécifie qu'il n'ya pas de return dans une fonction
function alertUser(msg) {
    // throw permet d'afficher un message d'erreur dans la console en erreur
    throw msg;
}
alertUser("This is an error");
