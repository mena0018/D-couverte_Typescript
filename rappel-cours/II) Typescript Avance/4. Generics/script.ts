// Generics => paramètres réutilisable dans les types, interfaces et fonctions

// Interface réutilisable
interface City <T> {
    name: string;
    population: number;
    additionalData: T
}

// Permet de choisir le type au moment de la création de l'objet. Possible de mettre n'importe quelle lettre
const Londres : City<object> = {
    name: "Londre",
    population: 8_000_000,
    additionalData: {
        area : 1572
    }
}

const Paris : City<string> = {
  name: "Paris",
  population: 2_000_000,
  additionalData: "Paris est la capitale de la France"
}

const Tokyo : City<object []> = {
  name: "Tokyo",
  population: 2_000_000,
  additionalData: [
    {
      area: 1572,
      pop: 5
    },
    {
      description: "Tokyo est la capitale du Japon"
    }
  ]
}
console.table([Tokyo, Paris, Londres])




// Fonctions
// Ici le type object est trop vaste. On ne peut ni spécifier sa longueur, ni les types qu'il va contenir
// const addRepairDate = (obj: object) => {
// Donc on définit un Generics qui pour l'instant va accepter tous les types
const addRepairDate = <G> (obj: G) => {
  const lastRepair = new Date()

  return {...obj, lastRepair}
}

const auto = addRepairDate({model: "Ford", year: 2018})
console.log(auto.model);

// Un Generics accepte tous les types
const auto2 = addRepairDate({model: "Ford", year: 2018, color: "white"})
// Même lorsque le paramètre n'est plus un objet..
const auto3 = addRepairDate("TEST")


// Pour restreindre le paramètre à un objet on peut utiliser extends
const addRepairDate2 = <G extends object> (obj: G) => {
  const lastRepair = new Date()

  return {...obj, lastRepair}
}
const auto5 = addRepairDate2({model: "Ford", year: 2018, color: "white"})
// const auto4 = addRepairDate2("TEST")


// 2nd exemple : 
function identity1 <Type> (arg: Type): Type {
  return arg
}
// Ici le type est défini lors de la création de l'objet
const aa = identity1(4)

// Et on peut restreindre le paramètre à un type précis avec extends. 
// De plus le type en sortie sera le même que celui en paramètre
function identity2 <Type extends number> (arg: Type): Type {
  return arg
}






// Pour obliger à fournir un paramètre ayant la propriété length
function consoleSize <T extends {length:number}> (arg: T) : T {
  console.log(arg.length);
  return arg
}

// const str = consoleSize(4);
const str2 = consoleSize([1,2,3]);



// On peut également extraire un type à partir d'une constante.
// Déconseillé car si on change user le type change et peut engendre des erreurs si on a utiliser le type autre part.
const user = {
  firstname: "John",
  lastname: "Doe",
  age: 20
}

type User = typeof user;