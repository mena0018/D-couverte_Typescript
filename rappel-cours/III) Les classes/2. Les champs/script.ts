class Book {
    private bookId = 88;
    readonly libraryName = "Library";

    constructor(
        public title: string,
        public price: number,
        public dateOfParution: string,
        public author: string,
        public theme?: string []
    ) {}

    promo() {
        console.log("Book Id :", this.bookId)
    }
}

const book1 = new Book("Le seigneur des anneaux", 25, "01/01/2001", "Tolkien");
book1.promo()


// Un champ privé n'est pas accessible en dehors du scop de sa classe
// console.log(book1.bookId)

// Un champ readonly ne peut pas être modifié 
// book1.libraryName = "Library2";

// Mais est accessible même en dehors de la classe
console.log(book1.libraryName)