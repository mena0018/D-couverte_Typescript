interface Rocket {
    reactors: number;
    vMax: number;
    takeOff: (action: string) =>  void
}

type Rocket2 = {
    reactors: number;
    vMax: number;
    takeOff: (action: string) =>  void
}


// La différence entre les 2 réside dans le fait qu'une interface peut être uniquement de type objet contrairement aux types.

// Également, avec une interface on peut faire du merging => rajouter des propriétés en cours de route
interface Rocket {
    price : number;
    carburant : number;
}

// type Rocket2 = {
//     price : number;
//     carburant : number;
// }

