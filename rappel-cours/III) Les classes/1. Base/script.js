"use strict";
class Book {
    constructor(t, p, d, a, th) {
        this.title = t;
        this.price = p;
        this.dateOfParution = d;
        this.author = a;
        this.theme = th;
    }
    promo() {
        return this.price * 0.5;
    }
}
const book1 = new Book("Le seigneur des anneaux", 25, "01/01/2001", "Tolkien");
console.log(book1.promo());
const addToShelter = (obj) => {
    console.log("ADDED", obj);
};
addToShelter(book1);
let onlyBook = [];
onlyBook.push(book1);
// onlyBook.push('TEST');
console.log(onlyBook);
