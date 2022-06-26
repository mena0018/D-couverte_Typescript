// Record <key, value> => Permet de définir le type d'un objet

// key: le type des clés de ton objet
// value: le type des valeurs de ton objet


const rocket : Record <string, string> = {
    name: "falcon",
    model: "xwing",
  }
  
  
  const list : Record <number, string> = {
    0: "Javascript",
    1: "CSS",
    // name: "PHP", // Incorrecte car la clé n'est pas de type number
  }
  
  
  type Keys = string | number
  type Values = string | number | object
  
  const advanced : Record <Keys, Values> = {
    name: "Javascript",
    1: "CSS",
    // 2: boolean // Incorecte car la valeur n'est pas de type string ou number
  }
  