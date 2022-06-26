// Intersection
type Fish = {
  fin: number;
  element: "water";
  gills: true;
};

type Shark = {
  weight: number;
  length: number;
};

type HammerheadShark = Fish & Shark;
// type HammerheadShark = Fish & Shark & {
//     newProperty : string;
// }


const shark1: HammerheadShark = {
  fin: 2,
  element: "water",
  gills: true,
  weight: 100,
  length: 100,
};


// RAPPEL : la différence entre les types et interfaces : On utilise les interfaces avec un système de Class


// Lier des Interfaces

interface Flower {
    pollen: true;
    type: 'vegetale'
}

interface Rose extends Flower {
    color: string;
    thorn: boolean;
}

const RedRose: Rose = {
    pollen: true,
    type: 'vegetale',
    color: 'red',
    thorn: true
}


// Union discriminante

type Japan = {
    lang: "JA";
    food: string[];
}

type Italy = {
    lang: "IT";
    food: string[];
}

type Country = Japan | Italy;

const automaticResponse = (country: Country) => {

    if (country.lang  === "JA") {
        console.log("HELLO JAPAN")
    } else if (country.lang  === "IT") {
        console.log("HELLO ITALY")
    }
}

const Japanese1: Country = {
    lang: "JA",
    food: ["Sushi", "Ramen"]
}

automaticResponse(Japanese1);



// Unknown number of props

interface Group {
    [name: string] : object;
}

const spainTrip : Group = {
    "John": {id: 1},
    "Tom":  {id: 2},
    "Julia": {id: 3},
}

console.log(spainTrip);