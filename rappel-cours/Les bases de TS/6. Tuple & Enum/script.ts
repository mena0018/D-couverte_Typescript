// Tuple : tableau avec longueur défini et un type défini pour chaque élément du tableau

// example sera un tableau d'exactement 2 éléments avec un booléen et un nombre
let example : [boolean, number];
example = [true, 42];

// Défaut => méthode push
example.push(4)


// Enum
// const roles = {
//     javascript : 1,
//     css: 2,
//     react: 3
// }

// Fait la même chose mais en commençant par 0
enum roles {javascript, css, react}
// Fait la même chose mais en commençant par 1
enum roles2 {javascript = 1, css, react}