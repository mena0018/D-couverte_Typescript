interface Rocket {
    reactors: number;
    vMax: number;
}

type Rocket2 = {
    reactors: number;
    vMax: number;
    takeOff: (action: string) =>  string
}



// Les interfaces peuvent être uniquement de type objet. on ne peut pas faire 
// interface Exemple : string {
// }
// Contrairement aux Type
type Exemple = string;


// Également, avec une interface on peut faire du merging => rajouter des propriétés en cours de route
interface Rocket {
    price : number;
    carburant : number;
}

// type Rocket2 = {
//     price : number;
//     carburant : number;
// }


// On peut implementer une Interface dans une classe
class Space implements Rocket {

    constructor (public reactors: number, public vMax: number, public price: number, public carburant: number) { 
        this.reactors = reactors;
        this.vMax = vMax;
        this.price = price;
        this.carburant = carburant;
    }
}

const falcon1 : Space = new Space(2, 100, 100000, 10)
console.log(falcon1)