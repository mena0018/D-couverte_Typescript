"use strict";
// Type Assertion
let txt;
txt = "str";
// le point d'exclamation oblige un seul type en sortie
// Assertion
// const form: HTMLFormElement = document.querySelector("form")!
// Type Casting => lorsque l'on assigne une variable => détecte le type de la variable
const form = document.querySelector("form");
// const input = document.querySelector("form") as HTMLInputElement
const elementPersoDom = document.querySelector("form-container");
form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
}
window.addEventListener('click', handleClick);
// MouseEvent => tous ce qui est lié à la souris
// DragEvent  => tous ce qui est lié au drag & drop
function handleClick(event) {
    console.log(event.clientX, event.clientY);
}
// querySelectorAll n'a pas le type null car il renvoie forcément une nodeList même vide. De plus, pas besoin de type casting.
const paragraphList = document.querySelectorAll("p");
const elementNonExistant = document.querySelectorAll("ul");
console.log(paragraphList, elementNonExistant);
paragraphList.forEach(el => console.log(el));
