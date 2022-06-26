interface Country {
    name: string;
    population: number;
    lang: string [];
}


class Norway implements Country {

    constructor(
        public name: string,
        public population: number,
        public lang: string []
    ) {}
}


class France implements Country {

    constructor(
        public name: string,
        public population: number,
        public lang: string []
    ) {}
}

const NorwayData = new Norway("Norway", 5_000_000,  ["Norvégien"]); 
const FranceData = new France("France", 65_000_000, ["Français", "Breton"]);


console.log(NorwayData);
console.log(FranceData);


class Aquitaine extends France {}
const AquitaineData = new Aquitaine("Aquitaine", 1_000_000, ["Français"]);