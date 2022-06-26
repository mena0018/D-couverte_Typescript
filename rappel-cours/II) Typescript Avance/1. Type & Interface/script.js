"use strict";
// type HammerheadShark = Fish & Shark & {
//     newProperty : string;
// }
const shark1 = {
    fin: 2,
    element: "water",
    gills: true,
    weight: 100,
    length: 100,
};
const RedRose = {
    pollen: true,
    type: 'vegetale',
    color: 'red',
    thorn: true
};
const automaticResponse = (country) => {
    if (country.lang === "JA") {
        console.log("HELLO JAPAN");
    }
    else if (country.lang === "IT") {
        console.log("HELLO ITALY");
    }
};
const Japanese1 = {
    lang: "JA",
    food: ["Sushi", "Ramen"]
};
automaticResponse(Japanese1);
const spainTrip = {
    "John": { id: 1 },
    "Tom": { id: 2 },
    "Julia": { id: 3 },
};
console.log(spainTrip);
