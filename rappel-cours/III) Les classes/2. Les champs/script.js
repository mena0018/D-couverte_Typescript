"use strict";
class Book {
    constructor(title, price, dateOfParution, author, theme) {
        this.title = title;
        this.price = price;
        this.dateOfParution = dateOfParution;
        this.author = author;
        this.theme = theme;
        this.bookId = 88;
        this.libraryName = "Library";
    }
    promo() {
        console.log("Book Id :", this.bookId);
    }
}
const book1 = new Book("Le seigneur des anneaux", 25, "01/01/2001", "Tolkien");
book1.promo();
// Un champ privé n'est pas accessible en dehors du scop de sa classe
// console.log(book1.bookId)
// Un champ readonly ne peut pas être modifié 
// book1.libraryName = "Library2";
// Mais est accessible même en dehors de la classe
console.log(book1.libraryName);
