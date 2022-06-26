"use strict";
class Norway {
    constructor(name, population, lang) {
        this.name = name;
        this.population = population;
        this.lang = lang;
    }
}
class France {
    constructor(name, population, lang) {
        this.name = name;
        this.population = population;
        this.lang = lang;
    }
}
const NorwayData = new Norway("Norway", 5000000, ["Norvégien"]);
const FranceData = new France("France", 65000000, ["Français", "Breton"]);
console.log(NorwayData);
console.log(FranceData);
class Aquitaine extends France {
}
const AquitaineData = new Aquitaine("Aquitaine", 1000000, ["Français"]);
