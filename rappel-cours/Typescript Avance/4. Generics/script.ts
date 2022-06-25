// Generics => paramètres réutilisable avec les interfaces et les fonctions

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
// Ici le type object est trop vaste
// const addRepairDate = (obj: object) => {

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
// const auto4 = addRepairDate2("TEST")
const auto5 = addRepairDate2({model: "Ford", year: 2018, color: "white"})
