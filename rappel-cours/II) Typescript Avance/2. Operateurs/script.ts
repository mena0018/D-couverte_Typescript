// L'opérateur : ! => renvoie jamais null

// Ne renverra jamais null
const container = document.querySelector(".container")!;


// L'opérateur : ? => propriété facultative

type Job = {
  title: string;
  description?: string;
  salary: number;
};

const user1: Job = {
  title: "Developpeur",
  description: "Développeur web",
  salary: 40000,
};


// Optional paramter
function message(msg?: string) {
  if (msg) {
    console.log(msg);
  } else {
    console.log("No msg provided");
  }
}

message("Hey")
message()



// Optional Interface
interface House {
    rooms: number;
    price: number;
    garage?: number;
}

const house1: House = {
    rooms: 4,
    price: 100000,
    // garage: 1,
}


// L'opérateur : ?? => affiche data (même lorsque data est une valeur falsy) à l'exception de null ou undefined
const data = 0;

const display = data || "No data";
const display2 = data ?? "No data";

console.log("||", display, "?? : ",display2);


// Never => Spécifie qu'il n'ya pas de return dans une fonction

function alertUser (msg: string) : never {
    // throw permet d'afficher un message d'erreur dans la console en erreur
    throw msg;
}

alertUser("This is an error");